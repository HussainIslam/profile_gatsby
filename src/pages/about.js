import React, { Component } from "react"

import Layout from "../components/layout"

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
    this.setState({ whoAmIOpen: !this.state.whoAmIOpen }, () =>
      console.log(target)
    )
  }
  handleWhereWas = target => {
    this.setState({ whereWasIOpen: !this.state.whereWasIOpen }, () =>
      console.log(target)
    )
  }
  handleIntrigues = target => {
    this.setState({ intriguesOpen: !this.state.intriguesOpen }, () =>
      console.log(target)
    )
  }
  handleDrives = target => {
    this.setState({ drivesOpen: !this.state.drivesOpen }, () =>
      console.log(target)
    )
  }
  handleHeading = target => {
    this.setState({ headingOpen: !this.state.headingOpen }, () =>
      console.log(target)
    )
  }

  render() {
    return (
      <Layout>
        <h1>About</h1>
        <div className={AboutStyle.mainContainer}>
          <div className={AboutStyle.sectionContainer}>
            <div className={AboutStyle.sectionHeaderContainer}>
              <h2 className={AboutStyle.sectionHeader}>Who am I?</h2>
              <span className={AboutStyle.openButton} onClick={this.handleWho}>
                {this.state.whoAmIOpen ? <span>&and;</span> : <span>&or;</span>}
              </span>
            </div>
            <p className={AboutStyle.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sapien mauris, tincidunt elementum sapien eget, interdum ultricies
              urna. Curabitur vel quam ut odio sodales ullamcorper at eget
              tortor. Duis ac bibendum sem, sollicitudin aliquet nisl.
              Suspendisse fermentum metus et nulla varius, commodo luctus eros
              imperdiet. Fusce vitae lobortis nisi. Sed accumsan aliquam purus,
              vitae lobortis mi scelerisque et. Nullam gravida mi a ante
              posuere, in consequat nulla semper. Suspendisse vel porta mauris.
              Ut eu magna venenatis, rhoncus massa in, porttitor justo. Integer
              sit amet eros dolor. Integer pulvinar ultricies augue, vitae
              tristique neque condimentum eget. Nam nec varius odio.
            </p>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div className={AboutStyle.sectionHeaderContainer}>
              <h2 className={AboutStyle.sectionHeader}>Where was I?</h2>
              <span
                className={AboutStyle.openButton}
                onClick={this.handleWhereWas}
              >
                {this.state.whereWasIOpen ? (
                  <span>&and;</span>
                ) : (
                  <span>&or;</span>
                )}
              </span>
            </div>
            <p className={AboutStyle.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sapien mauris, tincidunt elementum sapien eget, interdum ultricies
              urna. Curabitur vel quam ut odio sodales ullamcorper at eget
              tortor. Duis ac bibendum sem, sollicitudin aliquet nisl.
              Suspendisse fermentum metus et nulla varius, commodo luctus eros
              imperdiet. Fusce vitae lobortis nisi. Sed accumsan aliquam purus,
              vitae lobortis mi scelerisque et. Nullam gravida mi a ante
              posuere, in consequat nulla semper. Suspendisse vel porta mauris.
              Ut eu magna venenatis, rhoncus massa in, porttitor justo. Integer
              sit amet eros dolor. Integer pulvinar ultricies augue, vitae
              tristique neque condimentum eget. Nam nec varius odio.
            </p>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div className={AboutStyle.sectionHeaderContainer}>
              <h2 className={AboutStyle.sectionHeader}>What intrigues me?</h2>
              <span
                className={AboutStyle.openButton}
                onClick={this.handleIntrigues}
              >
                {this.state.intriguesOpen ? (
                  <span>&and;</span>
                ) : (
                  <span>&or;</span>
                )}
              </span>
            </div>
            <p className={AboutStyle.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sapien mauris, tincidunt elementum sapien eget, interdum ultricies
              urna. Curabitur vel quam ut odio sodales ullamcorper at eget
              tortor. Duis ac bibendum sem, sollicitudin aliquet nisl.
              Suspendisse fermentum metus et nulla varius, commodo luctus eros
              imperdiet. Fusce vitae lobortis nisi. Sed accumsan aliquam purus,
              vitae lobortis mi scelerisque et. Nullam gravida mi a ante
              posuere, in consequat nulla semper. Suspendisse vel porta mauris.
              Ut eu magna venenatis, rhoncus massa in, porttitor justo. Integer
              sit amet eros dolor. Integer pulvinar ultricies augue, vitae
              tristique neque condimentum eget. Nam nec varius odio.
            </p>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div className={AboutStyle.sectionHeaderContainer}>
              <h2 className={AboutStyle.sectionHeader}>What drives me?</h2>
              <span
                className={AboutStyle.openButton}
                onClick={this.handleDrives}
              >
                {this.state.drivesOpen ? <span>&and;</span> : <span>&or;</span>}
              </span>
            </div>
            <p className={AboutStyle.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sapien mauris, tincidunt elementum sapien eget, interdum ultricies
              urna. Curabitur vel quam ut odio sodales ullamcorper at eget
              tortor. Duis ac bibendum sem, sollicitudin aliquet nisl.
              Suspendisse fermentum metus et nulla varius, commodo luctus eros
              imperdiet. Fusce vitae lobortis nisi. Sed accumsan aliquam purus,
              vitae lobortis mi scelerisque et. Nullam gravida mi a ante
              posuere, in consequat nulla semper. Suspendisse vel porta mauris.
              Ut eu magna venenatis, rhoncus massa in, porttitor justo. Integer
              sit amet eros dolor. Integer pulvinar ultricies augue, vitae
              tristique neque condimentum eget. Nam nec varius odio.
            </p>
          </div>
          <div className={AboutStyle.sectionContainer}>
            <div className={AboutStyle.sectionHeaderContainer}>
              <h2 className={AboutStyle.sectionHeader}>Where am I heading?</h2>
              <span
                className={AboutStyle.openButton}
                onClick={this.handleHeading}
              >
                {this.state.headingOpen ? (
                  <span>&and;</span>
                ) : (
                  <span>&or;</span>
                )}
              </span>
            </div>
            <p className={AboutStyle.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sapien mauris, tincidunt elementum sapien eget, interdum ultricies
              urna. Curabitur vel quam ut odio sodales ullamcorper at eget
              tortor. Duis ac bibendum sem, sollicitudin aliquet nisl.
              Suspendisse fermentum metus et nulla varius, commodo luctus eros
              imperdiet. Fusce vitae lobortis nisi. Sed accumsan aliquam purus,
              vitae lobortis mi scelerisque et. Nullam gravida mi a ante
              posuere, in consequat nulla semper. Suspendisse vel porta mauris.
              Ut eu magna venenatis, rhoncus massa in, porttitor justo. Integer
              sit amet eros dolor. Integer pulvinar ultricies augue, vitae
              tristique neque condimentum eget. Nam nec varius odio.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
