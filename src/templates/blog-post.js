import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import BP from "./blog-post.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={BP.mainContainer}>
        <h1 className={BP.blogHeading}>{post.frontmatter.title}</h1>
        <h2 className={BP.blogHeadingMetadata}>
          Posted on: {post.frontmatter.date}
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          {post.timeToRead} minute read &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          Word Count: {post.wordCount.words}
        </h2>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
