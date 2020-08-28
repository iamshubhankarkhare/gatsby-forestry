---
blocks:
- template: heroblock2
  type: 0
  sections:
  - template: text
    type: Title
    props:
    - color:"pink.200"
    - bg:"black.100"
    color: "#45AFCC"
    content: This is the title
  - template: text
    type: Subtitle
    props:
    - color:"blue.500"
    - bg:"green.200"
    color: "#40AA0D"
    content: This is the subtitle
  - template: text
    type: Description
    props:
    - color:"gray.200"
    color: "#A8A8A8"
    content: This is the description This is the description This is the description
      This is the description This is the description This is the description This
      is the description This is the description This is the description This is the
      description This is the description This is the description This is the description
      This is the description
  - template: cta
    links:
    - template: link
      linktext: Homepage
      url: http://beyond8.in/
      variant: solid
    - template: link
      linktext: About Us
      url: https://beyond8.in/about
      variant: outline
- template: cardblock2
  heading:
  - template: heroblock2
    type: 0
    sections:
    - template: text
      type: Title
      props: []
      color: "#000000"
      content: Feature Section Title
    - template: text
      type: Subtitle
      props: []
      color: "#000000"
      content: Feature section Subtitle Feature section Subtitle Feature section Subtitle
  cards:
  - item:
    - template: heroblock2
      type: 0
      sections:
      - template: text
        type: Title
        props: []
        color: "#000000"
        content: Card 1
      - template: text
        type: Description
        props: []
        color: "#000000"
        content: Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1
          Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1 Card1
  - item:
    - template: heroblock2
      type: 0
      sections:
      - template: text
        type: Title
        props: []
        color: "#000000"
        content: Card 2
      - template: text
        type: Description
        props: []
        color: "#000000"
        content: " Card2 Card2 Card2 Card2  Card2 Card2 Card2 Card2  Card2 Card2 Card2
          Card2"
name: homepage2
path: "/homepage2"

---
