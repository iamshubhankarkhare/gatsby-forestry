---
name: homepage2
path: "/homepage2"
blocks2:
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
        content:
          "Description Description Description Description Description Description
          Description Description Description Description Description Description Description
          Description Description "
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
  - template: featureblock
    heading:
      - template: heroblock2
        type: 0
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
    cards:
      - displayname: Card 1
        item:
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
                content:
                  Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card 1Card
                  1
              - template: cta
                links:
                  - template: link
                    linktext: homepage
                    url: "/homepage"
                    variant: outline
      - displayname: Card 2
        item:
          - template: heroblock2
            type: 0
            sections:
              - template: text
                type: Title
                props: []
                color: "#000000"
                content: card 2
              - template: text
                type: Description
                props: []
                color: "#000000"
                content:
                  card 2 card 2card 2card 2card 2card 2card 2card 2card 2card 2card
                  2card 2
              - template: cta
                links:
                  - template: link
                    linktext: homepage2
                    url: "/homepage2"
                    variant: outline
---
