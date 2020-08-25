---
name: homepage
path: "/homepage"
blocks:
- template: heroblock
  type: "1"
  heading: Customizing the GraphQL Schema
  subtitle: One of Gatsby’s main strengths is the ability to query data from a variety
    of sources in a uniform way with GraphQL. For this to work, a GraphQL Schema must
    be generated that defines the shape of the data.
  body: Below the HomePage component declaration, export a new constant called query.
    The name of the constant isn’t important, as Gatsby looks for an exported graphql
    string from the file rather than a specific variable. Note that you can only have
    one page query per file.
  media: "/content/images/sonja-punz-N47B_zibNGo-unsplash.jpg"

---
