import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import LatestBlog from '../components/latest-blog/latest-blog'
import BlogStyle from "./page-css/blog.module.css"

const Blog = ({ data }) => {

  return(
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(( {node}, index ) => 
      (index === 0?
        <LatestBlog node={node} />:
        (<div key={node.id} className={BlogStyle.blogContainer}>
          <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
            <div className={BlogStyle.blogListContainer}>
              <div className={BlogStyle.blogListImage}>
                <Img fixed={node.frontmatter.featuredImage.childImageSharp.fixed} />
              </div>
              <div>
                <h3 className={BlogStyle.blogTitle}>{node.frontmatter.title}</h3>{" "}
                <h4 className={BlogStyle.blogPostDate}>
                  Posted: {node.frontmatter.date}
                </h4>
                <p>{node.excerpt}</p>

              </div>
            </div>
          </Link>
        </div>)
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
