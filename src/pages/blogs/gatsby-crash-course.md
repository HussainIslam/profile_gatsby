---
title: "Gatsby - Crash Course"
date: "2020-05-06"
---

# Intro - Gatsby

> Gatsby is a free and open source framework based on React that helps developers **build blazing fast** websites and apps.

This is from [gatsbyjs.org](https://www.gatsbyjs.org)

# Setup Gatsby

We need to install Gatsby CLI globally using `node package manager (npm)`. The following command is used to install Gatsby CLI:

`npm i -g gatsby-cli`

To create a new project using the CLI, we need to run the following command:

`gatsby new [project_name]`

Creating a project from a starter file from github:

`gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]`

# Creating a Page Component

Creating a page is very easy in Gatsby. Any javascript/JSX file that we create in the `src/pages/` directory will automatically because a webpage. Moreover, the webpages in Gatsby are also React components. So, like React, a component can be either functional component or class component. For example, we create a file called `about.js` and add a functional component to it. After doing this, we would have access to the route `/about` to our URL. A simple component may look like:

```javascript{numberLines: true}
import React from "react"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a World!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
```

# Creating a Component

To create a component, we should create a seperate directory called `components` where we would put all our components. All our components will be similar to React compnents, either functional or class. However, these will be smaller pieces that we will be able to reuse. There are two parts of working these components. First, creating the component. Second, using the component. For example, if we are goint to create a simple `header` component, we may do this:

```jsx{numberLines: true}
import React from "react"

export default function Header() {
  return <h1>This is a header.</h1>
}
```

After we create the component, we need to import and use the component in other components/pages. The page/component where we import the newly created component might look like:

```jsx{numberLines: true}
import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header />
      <p>Such wow. Very React.</p>
    </div>
  )
}
```

# Creating a Layout Component

The layout component is similar to any other component i.e. functional/class and reusable. However, we use Layout component to give our website consistent look across pages. For this we need to create a component that would receive a `children` and we can apply all the structure and style to this component. Finally, we can use this component to wrap our other components that would be treated as `children` of the layout component.

The convention of writing a layout component is that we create a `layout.js` file inside `components` directory. If we need to add any `.css` file we can add that using preferred method.

# Pass data to Component

If we want to pass some to our component, we can do that using `props`. `Props` can be thought of like parameters in fuctions. Functions accept parameters and do something with it but the client code that calls that function has the responsibility to pass that parameter. Similarly, some components expect `props` and does something with it but the component/page that is calling that component has the responsibility of passing that `props`. In our `header` component currently we have hard-coded the heading. However, that doesn't utilize the component based coding. So, we can pass the heading text to this component as `props` and use that inside the component. So, our component would look like this:

```jsx{numberLines: true}
import React from "react"

function Header(props) {
  return <h1>{props.headerText}</h1>
}

export default Header
```

So, this component is receiving a `props` called `headerText` that we are access using the `{}` curly brackets. Now, the page that is using this component need to pass this `props`. For example:

```jsx
<Header headerText="About Gatsby" />
```

# Linking pages

To link another page, we use a component that comes with the Gatsby, `Link`. To use this component we need to import this to any current component from `gatsby`, like this:

```jsx
import { Link } "gatsby"
```

`Link` component expects at least one `props` that is `to` which is the name of the `page` component. So, the `Link` component may look something like:

```
<Link to="/contact/">Contact</Link>
```

# Styling

We can add styling to our project in different methods:

1. Inside HTML
2. Seperate style for a component
3. Global style

## Scoped Style

Gatsby uses CSS Modules for scoped styling. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. Gatsby works out of the box with CSS Modules. This approach is highly recommended for those new to building with Gatsby (and React in general). The way we do this is by naming our .css file with `.module.css` like: `container.module.css`. You’ll notice that the file name ends with `.module.css` instead of the usual `.css`. This is how you tell Gatsby that this CSS file should be processed as a CSS module rather than plain CSS. Gatsby gets the styling file and parse the styling as classes and we can attach those classes to a tag. This was that specific tag would have a specific styling. We can add the styling specific to a tag like this:

```jsx {numberLines: true}
import React from "react"
import containerStyles from "./container.module.css"

const Container = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}

export default Container
```

The `container.module.css` file would look like:

```css
.container {
  margin: 3rem auto;
  max-width: 600px;
}
```

## Global Style

There are two ways to add styling globally.

1. Through `gatsby-browser.js` file
2. Through shared layout compnent

### Global Style: through `gatsby-browser.js` file

If you want to add global styles, you have to do two things. First, create a .css file that containts all the global stylings. We can keep this file inside the `src` directory. Second, we have to create a file called `gatsby-browser.js` in our project root directory (parallel to `src` directory) and then import the style file in that like this:

```js
import "./src/styles/global.css"
```

### Global Style: through share layout component

If we have a layout component, we can create a `layout.css` style file and import that in our component to apply global styling.

# Gatsby Data layer

For the purpose of working in Gatsby, “everything that lives outside a React component”. Gatsby’s data layer lets you pull data from Markdown, CSV, WordPress and others directly into your components — in the shape and form you want. You can use the node createPages API to pull unstructured data into Gatsby pages directly, rather than through the GraphQL data layer. There are many options for loading data into React components. One of the most popular and powerful of these is a technology called GraphQL. GraphQL is a query language (the QL part of its name). If you’re familiar with SQL, it works in a very similar way. Using a special syntax, you describe the data you want in your component and then that data is given to you.

There are some common information on website that need to be used in different locations, i.e. site header/title. This can be used many places; so, if we need to change it in future, this can become cumbersome. So, we put these common bits of data in `siteMetadata` object in `gatsby-config.js` file like this:

```javascript{numberLines: true}
module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

Now that we have put in the information in a place, we can pull the required information when and where needed using `page query`. To use page query, we need to import `graphql` from `gatsby`:

```js
import { graphql } from "gatsby"
```

Then we need to define the graphql query:

```js{numberLines: true}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
```

Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components. The position of the `title` is site > siteMetadata > title. We can access this using GraphQL editor that comes with gatsby: `localhost:8000/__graphql`.

Finally, we need to pass `data` to our respective component and access a specific piece of data.

```js{numberLines: true}
export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}
```

The query data is automatically put into the `data` props and can be accessed from inside the component.

For non-page components like `layout.js` we can use `StaticQuery` API, specifically `useStaticQuery` hook. The way we use this hook is similar to what we already did. However, instead of defining the query outside the component, we need to define it inside the component like this:

```js{numberLines: true}
const data = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
)
```

After we do this we will be able to access the data exactly same way we did for page components i.e. `{data.site.siteMetadata.title}`.

_**NOTE:** keep in mind that only pages can make page queries. Non-page components, such as Layout, can use StaticQuery._

# Data Source Plugin

Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc. Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The WordPress plugin knows how to fetch data from the WordPress API. For example, one of the source plugins is `gatsby-source-filesystem`. Let's see how to work with that:

## 1. Install `gatsby-source-filesystem`

`npm install --save gatsby-source-filesystem`

## 2. Configure the plugin

```js{numberLines: true}
plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
```

Now, if we go to our `graphql` IDE, we will be able to select data fields coming from the file system.

# Transformer plugin

Gatsby supports transformer plugins which take raw content from source plugins and transform it into something more usable. The filesystem source plugin lets you query data about files but what if you want to query data inside files? For this we can use the transformer plugins. Let's have a look at a transformer plugin, `gatsby-source-filesystem`, which can transform markdown files.

To install this, run the following command:

`npm install --save gatsby-transformer-remark`

To be able to use this plugin, we need to add the following line in `plugins` section of the `gatsby-config.js` file:

`gatsby-transformer-remark`

Now, we will have all the markdown meta data available to us, which we can use to display the content and the information itself.

# Creating Webpages Programmatically

Gatsby is not limited to making pages from files like many static site generators. Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. This has two steps:

1. Generating the slugs
2. Creating the page

## Step 1: Creating slugs for pages

A ‘slug’ is the unique identifying part of a web address, such as the `/tutorial/part-seven` part of the page `https://www.gatsbyjs.org/tutorial/part-seven/`. It is also referred to as the ‘path’ but this tutorial will use the term ‘slug’ for consistency. To create the slugs, we will use a Gatsby API called `onCreateNode`. To use this API, we have go to create the file `gatsby-node.js` in our project root directory and export a function with the same name from that file. For example:

```js{numberLines: true}
exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
}
```

We are still not making slugs. What we want is to create slugs from file names. So `pandas-and-bananas.md` will become `/pandas-and-bananas/`. To get it, you need to traverse the “node graph” to its parent **File node**, as File nodes contain data you need about files on disk. Because we are currently on `MarkdownRemark` node, which is actually inside a file and we need to go to the file. To do that, you’ll use the `getNode()` helper. Now, the code may look like this:

```js{numberLines: true}
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
```

Now, to get the slugs from the file names, we can use `createFilePath` function from `gatsby-source-filesystem`. This fuction handes finding the parent File node and also creating the slug for that file. So, we won't need the `getNode` method any more. We can test this with following code:

```js{numberLines: true}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}
```

Now you can add your new slugs directly onto the MarkdownRemark nodes. This is powerful, as any data you add to nodes is available to query later with GraphQL. So, it’ll be easy to get the slug when it comes time to create the pages. We can create this node field by using a function that is passed to our API through `actions` parameter.

```js{numberLines: true}
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
```

## Step 2: Creating pages

In this step, we need to implement another Gatsby API called `createPages`. This function has be to a asynchronous function as `graphql` function is a asynchronous. We can implement this function like:

```js{numberLines: true}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
```

Here, we are doing a few things. Let's look at the flow of action. First, we pull apart `createPage` function from actions. Then we write asynchronous function `result` that holds the promise of `graphql` function. Then we loop over each of the file nodes and for each one we create a page with `createPage` function. This function receives a few items, including the path, the path of the template component that would be used to generate the pages, and also context, which will be used to pull data out using graphql.

To programmatically create pages, we would also need a page template component. This will have two parts. First, pulling out the data using graphql:

```js{numberLines: true}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
```

This code will use the `slug` that is passed as `context` from `gatsby-node.js` file like this: `slug: node.fields.slug`. We then filter our query using this slug and get the `html` and `title` of a particular `markdownRemark`. Now, we pass these into our component as usual, with `props` called `data` and use that do structure our page. Here, we used a React method callaed `dangerouslySetInnerHTML` and pass it markups.

```js{numberLines: true}
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
```

Finally, we need to extract the slug using graphql and use it to `Link` each of the pages in any component that may navigate to these pages. For exaple:

```js{numberLines: true}
<Link
  to={node.fields.slug}
  css={css`
    text-decoration: none;
    color: inherit;
  `}
>
```

# Gatsby Dependencies

In our `package.json` file we can find some dependencies:

- `gatsby`: the main package to use gatsby
- `gatsby-link`: this package lets us use link tags
- `react-helmet`: used to generate react head information

# Using Plugins

There are two steps in using a plugin:

1. Installing a plugin:

`npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates`

2. Configuring the plugin by adding configuration code in `gatsby-config.js` file at project root direcotry:

```js{numberLines: true}
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

Specific to `typography` we need to add a new file in `/src/utils/typography.js` with the following code:

```js{numberLines: true}
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
```

# Basic Layout

We have to understand this is basically a react application. So, the strucutre here is similar to React app. The `src` directory holds all the source code files for the project.

- `pages` inside `src` are different pages for the website.
- `components` inside `src` are houses all the components we create.

# Depdencies

- `gatsby-source-filesystem`: This lets us work with files on the computer
- `gatsby-transformer-remark`: Lets us transform markdown files into pages
- `gatsby-plugin-catch-links`: handles links inside non-react files.

# References

1. [Gatsby Browser APIs: gatsby-browser.js](https://www.gatsbyjs.org/docs/browser-apis/)
2. [CSS Module](https://github.com/css-modules/css-modules)
3. [Plugin Library](https://www.gatsbyjs.org/plugins/)
4. [Gatsby Typography Plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/?=gatsby-plugin-typography)
5. [Gatsby Config](https://www.gatsbyjs.org/docs/gatsby-config/)
6. [GraphQL Reference](https://www.gatsbyjs.org/docs/graphql-reference/)
7. [Gatsby API - onCreateNode](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode)
8. [Gatsby Node API helper - getNode](https://www.gatsbyjs.org/docs/node-api-helpers/#getNode)
9. [Gatsby Plugin - gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
10. [React dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
