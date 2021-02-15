import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestBlog from '../components/latest-blog/latest-blog'
import BlogListItem from '../components/blog-list-item/blog-list-item'

const Blog = ({ data }) => {

  return(
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(( {node}, index ) => 
      (index === 0?
        <LatestBlog node={node} />: <BlogListItem node={node}/>
      )
    )}
  </Layout>
)}

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
            featuredImage{
              childImageSharp {
                small:fixed(width: 125, height: 125, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
                medium:fixed(width: 125, height: 125, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 800, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
