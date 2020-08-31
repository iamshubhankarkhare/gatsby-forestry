import React from "react"
import { Button, Link, Flex } from "@chakra-ui/core"

function Cta({ props }) {
  var compProps = {}
  console.log(props)
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
      {props.type === "button" && (
        <Button
          {...compProps}
          as="a"
          _hover={{}}
          href={`${props.url}`}
          variant={`${props.variant}`}
        >
          {props.linktext}
        </Button>
      )}
      {props.type === "link" && (
        <Link _hover={{}} href={`${props.url}`} {...compProps}>
          {props.linktext}
        </Link>
      )}
    </>
  )
}

export default Cta
