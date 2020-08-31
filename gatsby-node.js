const path = require("path")

// gatsby-node.js
exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent)
  if (node.internal.type === `MarkdownRemark`) {
    if (parent.internal.type === "File") {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
      createNodeField({
        node,
        name: "lastModified",
        value: parent.mtime,
      })
    }
  }
}
exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "HeroBlock",
      fields: {
        template: "String!",
        heading: "String",
        subtitle: "String",
        body: "String",
        type: "Int",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "Card",
      fields: {
        heading: "String",
        subtitle: "String",
        body: "String",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "CardBlock",
      fields: {
        template: "String!",
        heading: "String",
        subtitle: "String",
        card: ["Card"],
      },
      interfaces: ["Node"],
    }),
    schema.buildUnionType({
      name: "Page",
      types: ["HeroBlock", "CardBlock"],
      resolveType(value) {
        if (value.template === "heroblock") {
          return "HeroBlock"
        }
        if (value.template === "cardblock") {
          return "CardBlock"
        }

        throw "No template defined"
      },
    }),
    schema.buildObjectType({
      name: "Text",
      fields: {
        template: "String!",
        type: "String",
        color: "String",
        content: "String",
        props: ["String"],
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "Link",
      fields: {
        template: "String",
        linktext: "String",
        url: "String",
        type: "String",
        props: ["String"],
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "medium",
      fields: {
        template: "String",
        mediatype: "String",
        path: "String",
        image: "String",
        props: ["String"],
      },
      interfaces: ["Node"],
    }),

    schema.buildObjectType({
      name: "CTA",
      fields: {
        links: ["Link"],
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "HeroBlock2",
      fields: {
        type: "Int",
        template: "String!",
        heading: ["Text"],
        ctas: ["Link"],
        containsmedia: "Boolean",
        containsimage: "Boolean",
        media: ["medium"],
        props: ["String"],
      },
    }),
    schema.buildObjectType({
      name: "Item",
      fields: {
        displayname: "String",
        type: "HeroBlock2",
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "FeatureBlock",
      fields: {
        template: "String!",
        heading: ["Text"],
        cards: ["HeroBlock2"],
      },
      interfaces: ["Node"],
    }),
    schema.buildUnionType({
      name: "NewPage",
      types: ["HeroBlock2", "FeatureBlock"],
      resolveType(value) {
        if (value.template === "heroblock2") {
          return "HeroBlock2"
        }
        if (value.template === "cardblock2") {
          return "FeatureBlock"
        }
      },
    }),
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        blocks: {
          type: ["Page"],
        },
        sections: {
          type: ["NewPage"],
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

async function createPages(createPage, graphql) {
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "pages" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create pages
  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(({ node }, index) => {
    const template = "./src/templates/page.js"

    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(template),
        context: { id: node.id },
      })
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage, createRedirect } = actions

  // create pages
  await createPages(createPage, graphql)
}
