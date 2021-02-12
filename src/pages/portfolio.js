import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePorfolioCsv } from "../hooks/use-portfolio-csv"
// import Placeholder from "../images/portfolio_images/portfolio_realtor.png"

import PortStyle from "./page-css/portfolio.module.css"

const Portfolio = () => {
  const { nodes } = usePorfolioCsv().allPortfolioCsv
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h2>My Works</h2>
      {nodes.map((item, index) => {
        return (
          <div key={index} className={PortStyle.mainContainer}>
            <div className={PortStyle.imageContainer}>
              <img
                src={require(`../images/portfolio_images/${item.screenshot}`)}
                alt="project screenshot"
                className={PortStyle.imageTag}
              />
              <div className={PortStyle.infoContainer}>
                <p className={PortStyle.itemDescription}>{item.description}</p>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={item.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
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
