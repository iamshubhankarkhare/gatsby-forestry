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
        content:
          Description Description Description Description Description Description
          Description
    links:
      - template: link
        linktext: Test
        url: test
        variant: solid
    ctas:
      - template: link
        linktext: HomePage
        url: "/test"
        variant: solid
  - template: cardblock2
    heading:
      - template: text
        type: Title
        props: []
        content: Title of the featured block
      - template: text
        type: Subtitle
        props: []
        content: "Subtitle Subtitle Subtitle Subtitle Subtitle "
    cards:
      - displayname: Card 1
        heading:
          - template: text
            type: Title
            props: []
            content: Card1
          - template: text
            type: Description
            props: []
            content: CArd 1CArd 1CArd 1CArd 1CArd 1
        ctas:
          - template: link
            linktext: Home
            url: "/"
            variant: solid
        type:
      - displayname: Card2
        heading:
          - template: text
            type: Title
            props: []
            content: Card 2
          - template: text
            type: Description
            props: []
            content: CArd 2CArd 2CArd 2CArd 2CArd 2
        ctas:
          - template: link
            linktext: Home
            url: "/"
            variant: solid
        type:
---
