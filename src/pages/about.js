import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutStyle from "./page-css/about.module.css"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whoAmIOpen: false,
      whereWasIOpen: false,
      intriguesOpen: false,
      drivesOpen: false,
      headingOpen: false,
    }
  }

  handleWho = target => {
    this.setState({ whoAmIOpen: !this.state.whoAmIOpen })
  }

  handleWhereWas = target => {
    this.setState({ whereWasIOpen: !this.state.whereWasIOpen })
  }
  handleIntrigues = target => {
    this.setState({ intriguesOpen: !this.state.intriguesOpen })
  }
  handleDrives = target => {
    this.setState({ drivesOpen: !this.state.drivesOpen })
  }
  handleHeading = target => {
    this.setState({ headingOpen: !this.state.headingOpen })
  }

  render() {
    return (
      <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <div className={AboutStyle.mainPointsContainer}>
          <div className={AboutStyle.mainPoints}>Learner</div>
          <div className={AboutStyle.mainPoints}>Flexible</div>
          <div className={AboutStyle.mainPoints}>Curious</div>
          <div className={AboutStyle.mainPoints}>Passionate</div>
          <div className={AboutStyle.mainPoints}>Ambitious</div>
          <div className={AboutStyle.mainPoints}>Explorer</div>
        </div>
        <div className={AboutStyle.mainContainer}>
          <div className={AboutStyle.sectionContainer}>
            <div
              tabIndex="0"
              role="button"
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleWho}
              onKeyDown={this.handleWho}
            >
              <h2 className={AboutStyle.sectionHeader}>Who am I?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.whoAmIOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <div
              className={`${
                this.state.whoAmIOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
              <p>
                My name is Md. Hussainul Islam Sajib. I am an aspiring software
                developer. Currently, I am a student in Advanced Diploma program
                (Computer Programming & Analysis, CPA) in Seneca College. I am
                in my last semester, looking forward to graduate in August 2020.
                During my study here, I have received President’s Honor List
                Award multiple times for my result. I have been also maintaining
                the highest GPA possible.
              </p>
              <p>
                I consider myself a learner. I love to learn new things, let it
                be a new programming language, a new skill, or cooking. When I
                started my study in Computer Programming, I had very little
                knowledge of coding. The highest level of computer programming I
                did was in QBASIC back in my school (about 20 years ago). So, I
                started from absolute scratch and I have come some distance from
                there.
              </p>
            </div>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div
              tabIndex="-1"
              role="button"
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleWhereWas}
              onKeyDown={this.handleWhereWas}
            >
              <h2 className={AboutStyle.sectionHeader}>Where was I?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.whereWasIOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <div
              className={`${
                this.state.whereWasIOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
              <p>
                During the last few years, my life and I have gone through
                significant changes. In February 2017, I moved to Toronto,
                Canada from Dhaka, Bangladesh along with my wife and two kids.
                Needless to say, this was a huge change for me and my family!
              </p>
              <p>
                Then another change was waiting for me to happen. Back in
                Bangladesh, I used to work for a financial institution as a Fund
                Manager with my Bachelor and MBA in Finance. In 2018, I decided
                to switch career and move to Information Technology. I have
                always been interested in computers but never in my life tried
                out computer programming. So, I decided to give it a shot and
                see whether I like it. So, I started the diploma and I can
                confidently say that I have made the right decision. I love
                coding.
              </p>
            </div>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div
              tabIndex="-2"
              role="button"
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleIntrigues}
              onKeyDown={this.handleIntrigues}
            >
              <h2 className={AboutStyle.sectionHeader}>What intrigues me?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.intriguesOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <div
              className={`${
                this.state.intriguesOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
              <p>
                I have a strong fascination for new things. I keep trying new
                things, keep developing new things, and keep learning new
                things. For the last couple of years (since I learned
                developing), I have built numerous small to medium projects.
                These projects range from small contact submission pages to
                employee management application, from calculator to e-commerce
                app. I have developed for diverse range of platforms: desktop,
                web, back-end server, and android. Each of these gave me fresh
                sense of fascination.
              </p>
              <p>
                I am currently exploring Amazon Web Services (AWS), Software
                development life-cycle, CI/CD, and data warehousing (paving my
                way for Big Data).
              </p>
            </div>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div
              tabIndex="-3"
              role="button"
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleDrives}
              onKeyDown={this.handleDrives}
            >
              <h2 className={AboutStyle.sectionHeader}>What drives me?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.drivesOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <div
              className={`${
                this.state.drivesOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
              <p>
                I have always driven by two factors: passion for things I love
                and desire to success. When I first started coding, I felt like
                I have been waiting my whole life to do something like this. I
                can build things, try out new things. Although the journey is
                not smooth and I do get frustrated when something I am building
                doesn’t work the way I am expecting. However, that doesn’t take
                away the joy once I get it working.
              </p>
              <p>
                There comes my second drive, strong desire to success. I don’t
                stop doing something until I get it done. I used to try to be a
                perfectionist but over time I have realized that getting things
                done is much more important than making them perfect. I also
                believe in software there is nothing called “perfect”, there is
                always scope of improvement. So, I believe these two drivers
                combined has kept me ploughing through for the last couple of
                years.
              </p>
            </div>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div
              tabIndex="-4"
              role="button"
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleHeading}
              onKeyDown={this.handleHeading}
            >
              <h2 className={AboutStyle.sectionHeader}>Where am I heading?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.headingOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <div
              className={`${
                this.state.headingOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
              <p>
                I have two my goal in two dimensions. One is philosophical and
                the other one is technical. Philosophically, I am a strong
                believer of “do good” motto. I try to do good to other in my
                limited capacity. However, I believe, programming is a skill
                with which I can help people in many aspects. In that line, I
                want to make the lives better for the people who are really in
                need. I am still not definite about how I am going to do that
                but I know for sure that is something I want to do.
              </p>
              <p>
                Metaphorically speaking, for technical dimension, I consider
                myself to be someone in a buffet or a traveller. I am still in
                the tasting phasing where I want to taste different
                technologies, different programming languages before I settle
                down. I believe every technology has something amazing about it.
                So, this early on in my career I don’t want to miss out the good
                things. I will have time to choose.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
