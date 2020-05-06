import React from "react"

const Topic = ({ children }) => (
  <div
    style={{
      fontFamily: `'Noto Sans JP', sans-serif;`,
      color: `black`,
      fontSize: `1.5em`,
    }}
  >
    {children}
  </div>
)

export default Topic
