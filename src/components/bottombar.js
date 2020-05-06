import React from "react"

import BB from "./bottombar.module.css"

const BottomBar = () => (
  <div className={BB.mainContainer}>
    <div>Hussain</div>
    <ul>
      <li>github</li>
      <li>linkedin</li>
      <li>facebook</li>
      <li>youtube</li>
    </ul>
    <div>
      <h2>Quick Links</h2>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <h2>Useful Links</h2>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  </div>
)

export default BottomBar
