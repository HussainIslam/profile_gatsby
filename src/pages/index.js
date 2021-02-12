import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PlatformName from "../components/platform-name/platform-name"
import TechIcons from "../components/tech-icons/tech-icons"
import About from '../components/about/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PlatformName />
    <TechIcons />
    <About />
  </Layout>
)

export default IndexPage
