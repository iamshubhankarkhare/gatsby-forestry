import React from "react"
import { Flex } from "@chakra-ui/core"
import DHeading from "../components/DHeading.js"

function HeroBlock({ props }) {
  console.log(props)
  return (
    <Flex direction="column">
      {props.heading &&
        props.heading.map((h, i) => <DHeading props={h} key={i} />)}
    </Flex>
  )
}

export default HeroBlock
