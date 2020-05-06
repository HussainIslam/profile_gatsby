import React from "react"

import PNStyles from "./platform-name.module.css"

const PlatformName = () => (
  <div className={PNStyles.mainContainer}>
    <div className={PNStyles.platformContainer}>
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
    <div className={PNStyles.platformContainer}>
      <div className={PNStyles.platformTitle}>Mobile</div>
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus. Sed massa nisi, gravida ut tempus in,
        volutpat ac nunc. Phasellus quam nisi, porta non felis vel, fermentum
        porttitor felis.
      </div>
    </div>
    <div className={PNStyles.platformContainer}>
      <div className={PNStyles.platformTitle}>Desktop</div>
      <div className={PNStyles.platformDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        euismod metus nec justo ullamcorper, ultricies posuere enim feugiat.
        Aenean dignissim in leo ac molestie. Cras in arcu sed nunc gravida
        cursus ac consequat purus.
      </div>
    </div>
  </div>
)

export default PlatformName
