---
name: test
path: test
sections:
- template: heroblock2
  type: 0
  heading:
  - template: text
    type: Title
    props: []
    content: This is the Hero Block Title
  - template: text
    type: Subtitle
    props: []
    content: This is the Subtitle
  - template: text
    type: Description
    props: []
    content: Description Description Description Description Description Description
      Description
  links:
  - template: link
    linktext: Test
    url: test
    variant: solid
  ctas: []
- template: cardblock2
  heading:
  - template: text
    type: Title
    props: []
    content: Feature block title
  - template: text
    type: Subtitle
    props: []
    content: Feature Section DescriptionFeature Section DescriptionFeature Section
      DescriptionFeature Section Description
  cards:
  - displayname: Card 1
    heading:
    - template: text
      type: Title
      props: []
      content: Card 1
    - template: text
      type: Description
      props: []
      content: " Description for card 1Description for card 1Description for card
        1Description for card 1"
    ctas:
    - template: link
      linktext: Home
      url: "/"
      variant: solid
    type: 2
  - displayname: Card 2
    heading:
    - template: text
      type: Title
      props: []
      content: Card 2
    - template: text
      type: Description
      props: []
      content: card 2 Subtitlecard 2 Subtitlecard 2 Subtitlecard 2 Subtitlecard 2
        Subtitlecard 2 Subtitle
    ctas:
    - template: link
      linktext: Home
      url: "/"
      variant: ghost
    type: 1

---
