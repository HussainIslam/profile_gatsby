import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hussain from "../images/resume.png"

import ResumeStyle from "./page-css/resume.module.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={ResumeStyle.resumeContainer}>
      <div className={ResumeStyle.summaryContainer}>
        <div className={ResumeStyle.fixedContainer}>
          <div className={ResumeStyle.imageContainer}>
            <img
              src={Hussain}
              alt="hussain resume"
              className={ResumeStyle.resumeImage}
            />
          </div>
          <div className={ResumeStyle.summaryInfoContainer}>
            <div className={ResumeStyle.myName}>Md. Hussainul Islam Sajib</div>
            <div className={ResumeStyle.myAddress}>
              30 Denton Avenue, Toronto, ON
            </div>
            <div className={ResumeStyle.myEmail}>
              m.hussainul.islam@gmail.com
            </div>
            <div className={ResumeStyle.myPhone}>(416) 627 9414</div>
            <div className={ResumeStyle.mySocialContainer}></div>
          </div>
        </div>
      </div>
      <div className={ResumeStyle.detailResumeContainer}>
        <div className={ResumeStyle.sectionContainer}>
          <div className={ResumeStyle.sectionHeader}>Profile Hightlights</div>
          <div className={ResumeStyle.highlightContainer}>
            <ul className={ResumeStyle.highlightList}>
              <li className={ResumeStyle.hightlightListItem}>
                Received President's Honor List Award Multiple times
              </li>
              <li className={ResumeStyle.hightlightListItem}>
                Open Source Contributor
              </li>
              <li className={ResumeStyle.hightlightListItem}>
                Seneca's SMILE mentor for new students
              </li>
              <li className={ResumeStyle.hightlightListItem}>
                Progressive mindset to learn new technology
              </li>
              <li className={ResumeStyle.hightlightListItem}>
                Self-motivated team player
              </li>
            </ul>
          </div>
        </div>
        <div className={ResumeStyle.sectionContainer}>
          <div className={ResumeStyle.sectionHeader}>Education</div>
          <div className={ResumeStyle.degreesContainer}>
            <div className={ResumeStyle.degree}>
              <div className={ResumeStyle.degreeName}>Computer Programmer</div>
              <div className={ResumeStyle.degreeInstitute}>Seneca College</div>
              <div className={ResumeStyle.degreeYear}>2018 - 2020</div>
              <div className={ResumeStyle.degreeAward}>
                President's Honor List for <br />
                Aug' 18, Dec' 18, Apr' 19, Aug'19
              </div>
            </div>
            <div className={ResumeStyle.degree}>
              <div className={ResumeStyle.degreeName}>MBA</div>
              <div className={ResumeStyle.degreeInstitute}>
                University of Dhaka
              </div>
              <div className={ResumeStyle.degreeYear}>2011 - 2013</div>
            </div>
          </div>
        </div>
        <div className={ResumeStyle.sectionContainer}>
          <div className={ResumeStyle.sectionHeader}>Work Experience</div>
          <div className={ResumeStyle.experiencesContainer}>
            <div className={ResumeStyle.experience}>
              <div className={ResumeStyle.experienceContainer}>
                <div className={ResumeStyle.experiencePosition}>Peer Tutor</div>
                <div className={ResumeStyle.experienceOrganization}>
                  Seneca College
                </div>
                <div className={ResumeStyle.experienceTenure}>
                  Jan 2020 - Present
                </div>
                <div className={ResumeStyle.experienceResponsibilities}>
                  <ul className={ResumeStyle.listOfResponsibilities}>
                    <li className={ResumeStyle.responsibility}>
                      Helping peer students understand difficult course concepts
                      through one-on-one sessions{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={ResumeStyle.experience}>
              <div className={ResumeStyle.experienceContainer}>
                <div className={ResumeStyle.experiencePosition}>
                  Quality Assurance Intern
                </div>
                <div className={ResumeStyle.experienceOrganization}>
                  Q4 Inc.
                </div>
                <div className={ResumeStyle.experienceTenure}>
                  Sep 2019 - Nov 2019
                </div>
                <div className={ResumeStyle.experienceResponsibilities}>
                  <ul className={ResumeStyle.listOfResponsibilities}>
                    <li className={ResumeStyle.responsibility}>
                      Manually test internally built web application
                    </li>
                    <li className={ResumeStyle.responsibility}>
                      Write automation scripts that automate testing of stable
                      feature{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={ResumeStyle.experience}>
              <div className={ResumeStyle.experienceContainer}>
                <div className={ResumeStyle.experiencePosition}>Peer Tutor</div>
                <div className={ResumeStyle.experienceOrganization}>
                  Seneca College
                </div>
                <div className={ResumeStyle.experienceTenure}>
                  May 2019 - Sep 2019
                </div>
                <div className={ResumeStyle.experienceResponsibilities}>
                  <ul className={ResumeStyle.listOfResponsibilities}>
                    <li className={ResumeStyle.responsibility}>
                      Helping peer students understand difficult course concepts
                      through one-on-one sessions{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={ResumeStyle.experience}>
              <div className={ResumeStyle.experienceContainer}>
                <div className={ResumeStyle.experiencePosition}>
                  Technical Support Agent
                </div>
                <div className={ResumeStyle.experienceOrganization}>
                  Teleperformance
                </div>
                <div className={ResumeStyle.experienceTenure}>
                  Sep 2017 - Apr 2018
                </div>
                <div className={ResumeStyle.experienceResponsibilities}>
                  <ul className={ResumeStyle.listOfResponsibilities}>
                    <li className={ResumeStyle.responsibility}>
                      Solved customers’ network problems by understanding the
                      issue, asking probing questions for detailed information,
                      identifying the key issues, and responded with proper
                      resolution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={ResumeStyle.sectionContainer}>
          <div className={ResumeStyle.sectionHeader}>
            Volunteering Experience
          </div>
          <div className={ResumeStyle.volunteer}>
            <div className={ResumeStyle.volunteerPosition}>
              Seneca SMILE Mentor
            </div>
            <div className={ResumeStyle.volunteerOrganization}>
              Seneca College
            </div>
            <div className={ResumeStyle.volunteerTenure}>
              May 2019 - Present
            </div>
            <div className={ResumeStyle.volunteerResponsibilities}>
              <ul className={ResumeStyle.listOfResponsibilities}>
                <li className={ResumeStyle.responsibility}>
                  Helping new students transition into college by providing
                  information and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
