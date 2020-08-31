import React from "react"
import { graphql } from "gatsby"
import {
  Button,
  ThemeProvider,
  CSSReset,
  Flex,
  Text,
  Image,
} from "@chakra-ui/core"
import customTheme from "../theme.js"
import DHeading from "../components/DHeading.js"
import HeroBlock from "../components/HeroBlock.js"

const Page = ({ data }) => {
  console.log(data.markdownRemark.frontmatter.sections)
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {data.markdownRemark.frontmatter.sections.map((el, i) => (
        <Flex direction="column" key={i}>
          {el.__typename === "HeroBlock2" && <HeroBlock props={el} />}
        </Flex>
      ))}
      <Image src={`${data.markdownRemark.frontmatter.sections[2].image}`} />
    </ThemeProvider>
  )
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
    containsmedia
    mediatype
    path
    containsimage
    image
    type
    ctas {
      linktext
      url
      variant
    }
  }
`
