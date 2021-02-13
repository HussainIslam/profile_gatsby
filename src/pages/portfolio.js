import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { usePorfolioCsv } from "../hooks/use-portfolio-csv"
import Project from '../components/project/project'
//import PortStyle from "./page-css/portfolio.module.css"

const Portfolio = () => {
  const { nodes } = usePorfolioCsv().allPortfolioCsv

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h2>My Works</h2>
      {nodes.map((item, index) => {
        return (
          <Project item={item} index={index} />  
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
