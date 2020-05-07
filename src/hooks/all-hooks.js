import { useStaticQuery, graphql } from "gatsby"

export const useTechIcons = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { name: { regex: "/^icon_/" } }) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
      }
    `
  )
  return data.allFile.edges
}
