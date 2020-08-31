import React from "react"
import { Text, Heading } from "@chakra-ui/core"

function DHeading({ props }) {
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
