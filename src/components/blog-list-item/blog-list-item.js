import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import BlogStyle from './blog-list-item.module.css'

const BlogListItem = ({ node }) => {
    return (
        <div key={node.id} className={BlogStyle.blogContainer}>
            <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
                <div className={BlogStyle.blogListContainer}>
                <div className={BlogStyle.blogListImage}>
                    <Img fixed={node.frontmatter.featuredImage.childImageSharp.fixed} className={BlogStyle.image}/>
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
        </div>
    )
}

export default BlogListItem
