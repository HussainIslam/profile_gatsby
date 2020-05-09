import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Placeholder from "../images/placeholder.png"

import PortStyle from "./page-css/portfolio.module.css"

const Portfolio = ({ data }) => {
  console.log(data.allPortfolioCsv.nodes)
  return (
    <Layout>
      <h2>My Works</h2>
      {data.allPortfolioCsv.nodes.map((item, index) => {
        return (
          <div key={index} className={PortStyle.mainContainer}>
            <img
              src={Placeholder}
              alt="placeholder"
              className={PortStyle.imageContainer}
            />
            <div className={PortStyle.buttonsContainer}>
              <div className={PortStyle.singleButton}>
                <a href={item.github}>Github</a>
              </div>
              <div className={PortStyle.singleButton}>
                <a href={item.live}>Live</a>
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
      }
    }
  }
`

export default Portfolio
