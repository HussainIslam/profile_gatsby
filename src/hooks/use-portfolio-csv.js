import { useStaticQuery, graphql } from "gatsby"

export const usePorfolioCsv = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allPortfolioCsv {
          nodes {
            name
            live
            github
            screenshot
            description
          }
        }
      }
    `
  )

  return data
}
