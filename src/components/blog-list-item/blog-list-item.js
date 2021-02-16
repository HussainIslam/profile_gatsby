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
                    <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className={BlogStyle.image} imgStyle={{ objectFit: "cover" }}/>
                </div>
                <div className={BlogStyle.infoContainer}>
                    <h3 className={BlogStyle.blogTitle}>{node.frontmatter.title}</h3>{" "}
                    <h4 className={BlogStyle.blogPostDate}>
                    Posted: {node.frontmatter.date}
                    </h4>
                    <p className={BlogStyle.blogExcerpt}>{node.excerpt}</p>
                </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogListItem
