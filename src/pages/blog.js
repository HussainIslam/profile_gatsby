import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import LatestBlog from '../components/latest-blog/latest-blog'
import BlogListItem from '../components/blog-list-item/blog-list-item'
import BlogStyle from "./page-css/blog.module.css"

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
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 800){
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
