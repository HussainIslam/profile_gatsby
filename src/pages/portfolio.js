import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Placeholder from "../images/portfolio_images/portfolio_realtor.png"

import PortStyle from "./page-css/portfolio.module.css"

const Portfolio = ({ data }) => {
  console.log(data.allPortfolioCsv.nodes)
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h2>My Works</h2>
      {data.allPortfolioCsv.nodes.map((item, index) => {
        return (
          <div key={index} className={PortStyle.mainContainer}>
            <div className={PortStyle.imageContainer}>
              <img
                src={Placeholder}
                alt="placeholder"
                className={PortStyle.imageTag}
              />
            </div>
            <div className={PortStyle.infoContainer}>
              <p className={PortStyle.itemDescription}>{item.description}</p>
              <div className={PortStyle.buttonsContainer}>
                <div className={PortStyle.singleButton}>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <div className={PortStyle.singleButton}>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allPortfolioCsv {
      nodes {
        name
        live
        github
        screenshot
        description
      }
    }
  }
`

export default Portfolio
