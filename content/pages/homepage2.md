---
name: homepage2
path: "/homepage2"
blocks:
- template: heroblock2
  type: 1
  sections:
  - template: text
    type: Title
    props:
    - 'color: "gray.100"'
    color: "#000000"
    content: This si the main title
  - template: text
    type: Subtitle
    props:
    - bg:"pink.500"
    color: "#D81B1B"
    content: This is the Subtitle This is the Subtitle This is the Subtitle
  - template: text
    type: Description
    props:
    - 'fontWeight: "bold"'
    color: "#621212"
    content: 'Description Description Description Description Description Description
      Description Description Description Description Description Description Description
      Description Description '
  - template: cta
    links:
    - template: link
      linktext: Beyond8
      url: https://beyond8.in/
      variant: solid
    - template: link
      linktext: About Us
      url: https://beyond8.in/about/
      variant: outline
  heading: []
  links: []
- template: cardblock2
  heading:
  - template: heroblock2
    type: 
    sections:
    - template: text
      type: Title
      props:
      - color:"blue.500"
      - bg:"green.100"
      color: "#000000"
      content: Features Title
    - template: text
      type: Subtitle
      props:
      - textAlign:"center"
      color: "#DB2222"
      content: Features subtitle Features subtitle Features subtitle Features subtitle
    heading: []
    links: []
  cards: []
sections:
- template: heroblock2
  type: 1
  heading:
  - template: text
    type: Title
    props:
    - color:"gray.500"
    color: "#000000"
    content: This is the title of the page
  - template: text
    type: Subtitle
    props:
    - color:"pink.300"
    content: 'This is the subtitle This is the subtitle This is the subtitle '
  - template: text
    type: Description
    props:
    - color:"green200"
    - bg:"blue.100"
    content: 'This is the description This is the description This is the description
      This is the description This is the description This is the description '
  links:
  - template: link
    linktext: Homepage2
    url: "/homepage2"
    variant: solid
  - template: link
    linktext: Homepage2
    url: "/homepage2"
    variant: ghost
- template: cardblock2
  heading:
  - template: text
    type: Title
    props:
    - color:"blue.500"
    - bg:"pink.400"
    content: Feature Block Title
  - template: text
    type: Subtitle
    props:
    - bg:"black"
    - color:"white"
    content: This is the subtitle for the feature block
  cards:
  - displayname: Card 1
    heading:
    - template: heroblock2
      type: 0
      heading:
      - template: text
        type: Title
        props: []
        content: Card 1
      - template: text
        type: Description
        props: []
        content: Card 1 descriptionCard 1 descriptionCard 1 descriptionCard 1 description
      links:
      - template: link
        linktext: Card 1
        url: "/homepage2"
        variant: solid
  - displayname: Card 2
    heading:
    - template: heroblock2
      type: 0
      heading:
      - template: text
        type: Title
        props: []
        content: Card 2
      - template: text
        type: Description
        props: []
        content: Card 2 Description Card 2 Description Card 2 Description Card 2 Description
      links:
      - template: link
        linktext: Card 2
        url: "/homepage2"
        variant: ''

---
