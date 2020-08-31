import React from "react"
import { Flex } from "@chakra-ui/core"
import DHeading from "../components/DHeading.js"
import Cta from "../components/Cta.js"

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
  const Type1 = () => (
    <Flex direction="column" {...compProps}>
      {props.heading &&
        props.heading.map((h, i) => <DHeading props={h} key={i} />)}
      {props.ctas &&
        props.ctas.map((h, i) => (
          <Flex key={i} justify="center">
            <Cta props={h} />
          </Flex>
        ))}
    </Flex>
  )

  const Type2 = () => (
    <Flex direction="column" {...compProps}>
      {props.heading &&
        props.heading.map((h, i) => (
          <Flex justify="center" key={i}>
            {h.type === "Title" && <DHeading props={h} />}
          </Flex>
        ))}
      {props.heading &&
        props.heading.map((h, i) => (
          <Flex key={i}>{h.type !== "Title" && <DHeading props={h} />}</Flex>
        ))}

      {props.ctas &&
        props.ctas.map((h, i) => (
          <Flex key={i} justify="center">
            <Cta props={h} />
          </Flex>
        ))}
    </Flex>
  )
  return <Type2 />
}

export default HeroBlock
