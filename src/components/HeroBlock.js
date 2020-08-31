import React from "react"
import { Flex } from "@chakra-ui/core"
import DHeading from "../components/DHeading.js"
import Cta from "../components/Cta.js"

function HeroBlock({ props }) {
  console.log(props)
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

  console.log(props)
  return (
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
}

export default HeroBlock
