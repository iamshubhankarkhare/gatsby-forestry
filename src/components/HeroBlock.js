import React from "react"
import { Flex, Text } from "@chakra-ui/core"
import DHeading from "../components/DHeading.js"
import Cta from "../components/Cta.js"
import Media from "../components/Media.js"

function HeroBlock({ props }) {
  var compProps = {}

  props.props &&
    props.props.map((el, i) => {
      var prop = el.split("=")
      var temp
      if (prop[1].includes("|")) temp = prop[1].split("|")
      const value = prop[1].includes("|") ? temp : prop[1]
      compProps = {
        ...compProps,
        [prop[0]]: value,
      }
    })
  const TextBlock = () => (
    <Flex direction="column">
      {props.heading &&
        props.heading.map((h, i) => <DHeading props={h} key={i} />)}
    </Flex>
  )
  const CtaBlock = () => (
    <>
      {props.ctas &&
        props.ctas.map((h, i) => (
          <Flex key={i}>
            <Cta props={h} />
          </Flex>
        ))}
    </>
  )
  const TextCtaBlock = props => (
    <Flex direction="column" {...props}>
      <TextBlock />
      <CtaBlock />
    </Flex>
  )

  const Type2 = () => (
    <Flex direction={["column", "row-reverse"]} {...compProps}>
      <TextCtaBlock w={["100%", "50%"]} />
      {props.media &&
        props.media.map((el, i) => (
          <Flex justify="center" key={i} w={["100%", "50%"]}>
            <Media props={el} />
          </Flex>
        ))}
    </Flex>
  )

  const Type3 = () => (
    <Flex direction="column" {...compProps}>
      <TextCtaBlock align="center" />
      {props.media &&
        props.media.map((el, i) => (
          <Flex justify="center" key={i}>
            <Media props={el} />
          </Flex>
        ))}
    </Flex>
  )

  const Type4 = () => (
    <Flex direction={["column", "row"]} {...compProps}>
      <Flex w={["100%", "40%"]} align="center">
        <TextCtaBlock mx="8" />
      </Flex>
      {props.media &&
        props.media.map((el, i) => (
          <Flex
            justify="center"
            w={["100%", "60%"]}
            key={i}
            bgImage={`url(${el.image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize={["contain", "cover"]}
          ></Flex>
        ))}
    </Flex>
  )
  const Type5 = () => (
    <Flex
      {...compProps}
      bgImage={`url(${props.media[0].image})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize={"cover"}
    >
      <TextCtaBlock
        w={["xs", "2xl"]}
        bg={compProps.bg}
        opacity="0.95"
        justify="center"
      />
    </Flex>
  )
  return (
    <>
      {(props.type === 1 || props.type === null) && (
        <>
          <TextCtaBlock {...compProps} />
          <Text bg="white" fontSize="3xl" textAlign="center">
            Type2
          </Text>
        </>
      )}
      {props.type === 2 && (
        <>
          <Text bg="white" fontSize="3xl" textAlign="center">
            Type2
          </Text>
          <Type2 />
        </>
      )}{" "}
      {props.type === 3 && (
        <>
          <Text bg="white" fontSize="3xl" textAlign="center">
            Type3
          </Text>
          <Type3 />
        </>
      )}{" "}
      {props.type === 4 && (
        <>
          <Text bg="white" fontSize="3xl" textAlign="center">
            Type4
          </Text>
          <Type4 />
        </>
      )}
      {props.type === 5 && (
        <>
          <Text bg="white" fontSize="3xl" textAlign="center">
            Type5
          </Text>
          <Type5 />
        </>
      )}
    </>
  )
}

export default HeroBlock
