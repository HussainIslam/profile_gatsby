import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Placeholder from "../images/placeholder.png"

const Portfolio = ({ data }) => {
  console.log(data.allPortfolioCsv.nodes)
  return (
    <Layout>
      <h2>This is portfolio page</h2>
      {data.allPortfolioCsv.nodes.map((item, index) => {
        return (
          <div key={index}>
            <img src={Placeholder} alt="placeholder" />
            <a href={item.github}>Github</a>
            <a href={item.live}>Live</a>
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
