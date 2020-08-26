---
name: homepage
path: homepage
blocks:
  - template: heroblock
    type: "3"
    heading: Cust the GraphQL Schema
    subtitle:
      One of Gatsby’s main strengths is the ability to query data from a variety
      of sources in a uniform way with GraphQL. For this to work, a GraphQL Schema must
      be generated that defines the shape of the data.
    body:
      Below the HomePage component declaration, export a new constant called query.
      The name of the constant isn’t important, as Gatsby looks for an exported graphql
      string from the file rather than a specific variable. Note that you can only have
      one page query per file.
    media: "/content/images/sonja-punz-N47B_zibNGo-unsplash.jpg"
    cta: 
      - content: "CTA1"
        url: "https://beyond8.in/"
        type: "button"
      - content: "CTA2"
        url: "https://beyond8.in/"
        type: "link"
  - template: cardblock
    heading: Customizing the GraphQL Schema
    subtitle:
      "The example project is a blog that gets its data from local Markdown
      files which provide the post contents, as well as author information in JSON format. "
    card:
      - heading: Card 2
        subtitle: subtitle
        body:
          The first part of writing the GraphQL query is including the operation (in
          this case ”query”) along with a name.
        media: "/content/images/ruslan-bardash-g83y6do219w-unsplash.jpg"
      - heading: Card 1
        subtitle: subtitle
        body:
          The first part of writing the GraphQL query is including the operation (in
          this case ”query”) along with a name.
        media: "/content/images/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg"

---
