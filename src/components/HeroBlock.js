import React from "react"
import { Flex } from "@chakra-ui/core"
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

  return (
    <>
      {(props.type === 1 || props.type === null) && (
        <TextCtaBlock {...compProps} />
      )}
      {props.type === 2 && <Type2 />}
      {props.type === 3 && <Type3 />}
    </>
  )
}

export default HeroBlock
