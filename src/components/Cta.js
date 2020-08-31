import React from "react"
import { Button, Flex } from "@chakra-ui/core"

function Cta({ props }) {
  var compProps = {}
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
      {
        <Button
          {...compProps}
          as="a"
          _hover={{}}
          href={`${props.url}`}
          variant={`${props.variant}`}
        >
          {props.linktext}
        </Button>
      }
    </>
  )
}

export default Cta
