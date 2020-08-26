import React from "react"
import { graphql } from "gatsby"
import {
  Link,
  Box,
  Image,
  ThemeProvider,
  SimpleGrid,
  CSSReset,
} from "@chakra-ui/core"
import { Button, Flex, Text } from "@chakra-ui/core"
import customTheme from "../theme.js"

const HeroCard = ({ data }) => {
  console.log(data.media)
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
      <Flex
        my={[4, 16]}
        direction={["column", `${data.type === 1 ? "row" : "row-reverse"}`]}
      >
        <Flex
          w={["100%", `${data.type === 3 ? "80%" : "50%"}`]}
          direction="column"
          mx={[0, 16]}
        >
          {data.type !== 2 && (
            <Text
              as="h3"
              fontSize={["md", "xl"]}
              color="secondary.black"
              w={["100%", "70%"]}
            >
              {data.subtitle}
            </Text>
          )}
          <Text my="8" w={["100%", "50%"]}>
            {data.body}
          </Text>
          <Flex>
            {data.cta.map((el, i) => (
              <div key={i} my={[4, 8]}>
                {el.type === "button" && (
                  <Button
                    as="a"
                    href={el.url}
                    bg="secondary.blue3"
                    color="white"
                    w="2xs"
                    mr={[4, 8]}
                  >
                    {el.content}
                  </Button>
                )}
                {el.type === "link" && (
                  <Link color="primary.red" fontWeight="bold" href={el.url}>
                    {el.content}
                  </Link>
                )}
              </div>
            ))}
          </Flex>
        </Flex>
        {data.type !== 3 && (
          <Flex justify="center" w={["100%", "50%"]}>
            <Image src="https://picsum.photos/200/300" alt="img" size="sm" />
          </Flex>
        )}
      </Flex>
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
            type
            media
            cta {
              content
              url
              type
            }
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
