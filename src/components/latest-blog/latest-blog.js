import React from 'react'
import BlogStyle from './latest-blog.module.css'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const LatestBlog = ({ node }) => {
    return (
        <div key={node.id} className={BlogStyle.highlight}>
            <Link to={node.fields.slug} className={BlogStyle.blogLinks}>
                <h5>Latest Blog</h5>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
            </Link>
        </div>
    )
}

export default LatestBlog
