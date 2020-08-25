import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  console.log(data)
  return <div>template page</div>
}

export default Page

export const pageQuery = graphql`
  query MyQuery($id: String) {
    markdownRemark(fields: { sourceName: { eq: "pages" } }, id: { eq: $id }) {
      id
      frontmatter {
        blocks {
          ... on HeroBlock {
            heading
            subtitle
            body
            template
          }
          ... on CardBlock {
            heading
            subtitle
            card {
              heading
              subtitle
              body
            }
            template
          }
        }
      }
    }
  }
`
