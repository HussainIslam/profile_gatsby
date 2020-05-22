import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogStyle from "./page-css/blog.module.css"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h2>My Blog Posts</h2>
    <h4 className={BlogStyle.pageSubheading}>
      Post Count: {data.allMarkdownRemark.totalCount}
    </h4>
    <hr />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className={BlogStyle.blogContainer}>
        <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
          <h3 className={BlogStyle.blogTitle}>{node.frontmatter.title}</h3>{" "}
          <h4 className={BlogStyle.blogPostDate}>
            Posted: {node.frontmatter.date}
          </h4>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
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
