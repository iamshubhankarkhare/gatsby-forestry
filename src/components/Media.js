import React from "react"
import { Image, Link, Flex } from "@chakra-ui/core"

function Media({ props }) {
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
      {props.mediatype === "Image" && (
        <Image {...compProps} src={props.image} />
      )}
    </>
  )
}

export default Media
