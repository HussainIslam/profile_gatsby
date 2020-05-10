import React from "react"

const Topic = ({ align, children }) => (
  <div
    style={{
      fontFamily: `'Noto Sans JP', sans-serif`,
      color: `black`,
      fontSize: `1.7em`,
      width: `100%`,
      display: `flex`,
      justifyContent: align,
      fontWeight: `bolder`,
      marginTop: `50px`,
    }}
  >
    {children}
  </div>
)

export default Topic
