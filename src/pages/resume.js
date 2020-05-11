import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hussain from "../images/resume.png"

import ResumeStyle from "./page-css/resume.module.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h2>This is resume page</h2>
    <div className={ResumeStyle.resumeContainer}>
      <div className={ResumeStyle.summaryContainer}>
        <div className={ResumeStyle.imageContainer}>
          <img
            src={Hussain}
            alt="hussain resume"
            className={ResumeStyle.resumeImage}
          />
        </div>
        <div className={ResumeStyle.summaryInfoContainer}>
          <div>Md. Hussainul Islam Sajib</div>
          <div>30 Denton Avenue, Scarborough, Ontario</div>
          <div>m.hussainul.islam@gmail.com</div>
          <div>(416) 627 9414</div>
          <div></div>
        </div>
      </div>
      <div className={ResumeStyle.detailResumeContainer}>
        <div className={ResumeStyle.profileHighlights}>
          <div>Profile Hightlights</div>
          <div>
            <ul>
              <li>Received President's Honor List Award Multiple times</li>
              <li>Open Source Contributor</li>
              <li>Seneca's SMILE mentor for new students</li>
              <li>Progressive mindset to learn new technology</li>
              <li>Self-motivated team player</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
