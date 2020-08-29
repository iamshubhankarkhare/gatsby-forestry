import React from "react"
import { graphql } from "gatsby"

const Main = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { index_page },
    },
  } = data
  console.log(index_page[0].hero_type)
  return <div>aman</div>
}

export default Main
