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
        <h1>About</h1>
        <div className={AboutStyle.mainContainer}>
          <div className={AboutStyle.sectionContainer}>
            <div
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleWho}
            >
              <h2 className={AboutStyle.sectionHeader}>Who am I?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.whoAmIOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <p
              className={`${
                this.state.whoAmIOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
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
            <div
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleWhereWas}
            >
              <h2 className={AboutStyle.sectionHeader}>Where was I?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.whereWasIOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <p
              className={`${
                this.state.whereWasIOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
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
            <div
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleIntrigues}
            >
              <h2 className={AboutStyle.sectionHeader}>What intrigues me?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.intriguesOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <p
              className={`${
                this.state.intriguesOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
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
            <div
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleDrives}
            >
              <h2 className={AboutStyle.sectionHeader}>What drives me?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.drivesOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <p
              className={`${
                this.state.drivesOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
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
            <div
              className={AboutStyle.sectionHeaderContainer}
              onClick={this.handleHeading}
            >
              <h2 className={AboutStyle.sectionHeader}>Where am I heading?</h2>
              <span className={AboutStyle.openButton}>
                {this.state.headingOpen ? "[Collapse]" : "[Expand]"}
              </span>
            </div>
            <p
              className={`${
                this.state.headingOpen
                  ? AboutStyle.showElement
                  : AboutStyle.hideElement
              } ${AboutStyle.sectionText}`}
            >
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
