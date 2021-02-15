import { useStaticQuery, graphql } from "gatsby"

export const useSocialIconsCSV = () => {
  const data = useStaticQuery(
    graphql`
    query{
        allSocialIconsCsv {
          nodes {
            name
            url
            icon
          }
        }
      }
    `
  )

  return data
}
