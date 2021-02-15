import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar/navbar"
import BottomBar from "./bottombar/bottombar"
import SideBar from '../components/side-bar/side-bar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div
        style={{
          margin: `100px auto`,
          width: `50vw`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <BottomBar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
