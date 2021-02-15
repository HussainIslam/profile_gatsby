import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar/navbar"
import BottomBar from "./bottombar/bottombar"
import SideBar from '../components/side-bar/side-bar'
import "bootstrap/dist/css/bootstrap.min.css"
import Style from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className={Style.bodyContainer} >
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
