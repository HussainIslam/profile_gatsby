import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Up from "../images/up.svg"
import Left from "../images/left.svg"
import Img from 'gatsby-image'

import BP from "./blog-post.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const featuredImageFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className={BP.mainContainer} id="blog-heading">
        <div
          className={BP.goUp}
          role="button"
          tabIndex="0"
          onKeyPress={() => window.scrollTo(0, 0)}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={Up} alt="go up button" />
          <p>Go Top</p>
        </div>
        <div className={BP.goBack}>
          <Link to="/blog">
            <img src={Left} alt="go back button" />
            <p>Go Back</p>
          </Link>
        </div>
        <h1 className={BP.blogHeading}>{post.frontmatter.title}</h1>
        <h2 className={BP.blogHeadingMetadata}>
          Posted on: {post.frontmatter.date}
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          {post.timeToRead} minute read &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          Word Count: {post.wordCount.words}
        </h2>
        <hr />
        <Img fluid={featuredImageFluid} />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className={BP.blogBody}
        />
      </div>
      <div className={BP.blogTableOfContents}>
        <h1 className={BP.blogTableOfContentsHeading}>Table of Contents</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        <hr />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      wordCount {
        paragraphs
        sentences
        words
      }
      frontmatter {
        title
        date(formatString: "DD MMM Y")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      tableOfContents
    }
  }
`
