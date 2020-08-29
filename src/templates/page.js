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
        name
        path
        sections {
          ... on HeroBlock2 {
            template
            ...HeroBlock2Fragment
          }
          ... on FeatureBlock {
            template
            heading {
              ...TextFragment
            }
            cards {
              ...HeroBlock2Fragment
            }
          }
        }
      }
    }
  }

  fragment TextFragment on Text {
    content
    type
    props
  }

  fragment HeroBlock2Fragment on HeroBlock2 {
    heading {
      ...TextFragment
    }
    ctas {
      linktext
      url
      variant
    }
  }
`
