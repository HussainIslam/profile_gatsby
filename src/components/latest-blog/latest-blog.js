import React from 'react'
import BlogStyle from './latest-blog.module.css'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const LatestBlog = ({ node }) => {
    return (
        <div key={node.id} className={BlogStyle.highlight}>
            <div>Latest Blog</div>
            <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className={BlogStyle.highlightImage} />
                <h3 className={BlogStyle.title}>{node.frontmatter.title}</h3>
                <p className={BlogStyle.excerpt}>{node.excerpt}</p>
            </Link>
        </div>
    )
}

export default LatestBlog
