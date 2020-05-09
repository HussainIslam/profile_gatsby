import React, { Component } from "react"

import Layout from "../components/layout"

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

  render() {
    return (
      <Layout>
        <h1>About</h1>
        <div>
          <div>
            <h2>Who am I?</h2>
            <p>
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
          <div>
            <h2>Where was I?</h2>
            <p>
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
          <div>
            <h2>What intrigues me?</h2>
            <p>
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
          <div>
            <h2>What drives me?</h2>
            <p>
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
          <div>
            <h2>Where am I heading?</h2>
            <p>
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
