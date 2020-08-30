import React from "react"
import { Text, Heading } from "@chakra-ui/core"

function DHeading({ props }) {
  console.log(props)
  var compProps = {}
  props.props.map((el, i) => {
    var prop = el.split("=")
    console.log(prop)
    var temp
    if (prop[1].includes("|")) temp = prop[1].split("|")
    console.log(temp)
    const value = prop[1].includes("|") ? temp : prop[1]
    compProps = {
      ...compProps,
      [prop[0]]: value,
    }
    console.log(compProps)
  })

  return (
    <>
      {props.type === "Title" && (
        <Heading as="h1" {...compProps}>
          {props.content}
        </Heading>
      )}
      {props.type === "Subtitle" && (
        <Heading as="h2" {...compProps}>
          {props.content}
        </Heading>
      )}
      {props.type === "Description" && (
        <Text as="p" {...compProps}>
          {props.content}
        </Text>
      )}
    </>
  )
}

export default DHeading
