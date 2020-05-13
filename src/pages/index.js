import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PlatformName from "../components/platform-name"
import TechIcons from "../components/tech-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PlatformName />
    <TechIcons />
  </Layout>
)

export default IndexPage
