import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogStyle from "./page-css/blog.module.css"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(( {node}, index ) => 
      ( index === 0?
        (<div key={node.id} className={BlogStyle.highlight}>
          <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
            <h5>Latest Blog</h5>
            <hr/>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>):
        (<div key={node.id} className={BlogStyle.blogContainer}>
          <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
            <h3 className={BlogStyle.blogTitle}>{node.frontmatter.title}</h3>{" "}
            <h4 className={BlogStyle.blogPostDate}>
              Posted: {node.frontmatter.date}
            </h4>
            <p>{node.excerpt}</p>
          </Link>
        </div>)
      )
    )}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
