import React from "react"

import Topic from "./topic"

import PNStyles from "./platform-name.module.css"

const PlatformName = () => (
  <div className={PNStyles.mainContainer}>
    <Topic>I develop for</Topic>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Web</div>
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus. Sed massa nisi, gravida ut tempus in,
        volutpat ac nunc. Phasellus quam nisi, porta non felis vel, fermentum
        porttitor felis.
      </div>
    </div>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="400"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Mobile</div>
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus. Sed massa nisi, gravida ut tempus in,
        volutpat ac nunc.
      </div>
    </div>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="800"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Desktop</div>
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus.
      </div>
    </div>
    <br />
    <br />
    <br />
    <Topic align={"flex-end"}>
      <span className={PNStyles.myNameTopic}>I am </span>
    </Topic>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="800"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus.
      </div>
      <div className={PNStyles.myName}>Hussain</div>
    </div>
  </div>
)

export default PlatformName
