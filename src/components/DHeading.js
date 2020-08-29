import React from "react"
import { Text } from "@chakra-ui/core"

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
      {props.type === "Title" && <Text {...compProps}>{props.content}</Text>}
      {props.type === "Subtitle" && <Text {...compProps}>{props.content}</Text>}
      {props.type === "Description" && (
        <Text {...compProps}>{props.content}</Text>
      )}
    </>
  )
}

export default DHeading
