import React from "react"
import { graphql } from "gatsby"
import { Box, ThemeProvider, SimpleGrid, CSSReset } from "@chakra-ui/core"
import { Button, Flex, Text } from "@chakra-ui/core"
import customTheme from "../theme.js"

const HeroCard = ({ data }) => {
  return (
    <Flex
      bg="white"
      direction="column"
      boxShadow="xl"
      m="4"
      px={[4, 16]}
      w="full"
    >
      <Text
        as="h2"
        fontSize={["3xl", "5xl"]}
        my="4"
        fontWeight="bold"
        color="secondary.blue3"
        alignSelf="center"
      >
        {data.heading}
      </Text>

      <Text
        as="h3"
        fontSize={["md", "xl"]}
        color="secondary.black"
        alignSelf="center"
      >
        {data.subtitle}
      </Text>
      <Text my="8">{data.body}</Text>
    </Flex>
  )
}
const Card = ({ data }) => {
  return (
    <Flex bg="white" direction="column" boxShadow="xl">
      <Text
        as="h2"
        fontSize={["2xl", "3xl"]}
        my="4"
        fontWeight="bold"
        color="secondary.green"
        alignSelf="center"
      >
        {data.heading}
      </Text>

      <Text
        as="h3"
        fontSize={["md", "xl"]}
        color="secondary.black"
        alignSelf="center"
      >
        {data.subtitle}
      </Text>
      <Text my="8" px={[4, 12]}>
        {data.body}
      </Text>
    </Flex>
  )
}
const CardSection = ({ data }) => {
  return (
    <Flex
      bg="white"
      direction="column"
      boxShadow="xl"
      mt={[8, 16]}
      px={[4, 16]}
      w="full"
      pb={[8, 16]}
    >
      <Text
        as="h2"
        fontSize={["3xl", "5xl"]}
        my="4"
        fontWeight="bold"
        color="primary.red"
        alignSelf="center"
      >
        {data.heading}
      </Text>

      <Text
        as="h3"
        fontSize={["md", "xl"]}
        color="secondary.black"
        alignSelf="center"
      >
        {data.subtitle}
      </Text>
      <SimpleGrid columns={[1, 2]} spacing={10} mt={[8, 16]}>
        {data.card.map((el, i) => (
          <Card data={el} key={i} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

const Page = ({ data }) => {
  console.log(data)
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Flex direction="column" mt="5" justify="center" align="center">
        {data.markdownRemark.frontmatter.blocks.map((el, i) =>
          el.template === "heroblock" ? (
            <HeroCard data={el} key={i} />
          ) : (
            <CardSection data={el} key={i} />
          )
        )}
      </Flex>
    </ThemeProvider>
  )
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
