---
name: test
path: test
sections:
  - template: heroblock2
    type:
    heading:
      - template: text
        type: Title
        props:
          - color=secondary.blue3
          - alignSelf=center
          - fontSize=3xl|4xl
          - my=4|12
        content: This is the Hero Block Title
      - template: text
        type: Subtitle
        props:
          - mx=0|12
          - my=4
          - fontSize=2xl|3xl
        content: This is the Subtitle
      - template: text
        type: Description
        props:
          - mx=0|12
          - my=4
        content: Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        props: []
        type: ""
    mediatype: Image
    path: ""
    containsimage: false
    image: "/content/images/ruslan-bardash-g83y6do219w-unsplash.jpg"
    containsmedia: true
    props:
      - p=12|4
    media:
      - mediatype: Image
        path: ""
        image: "/content/images/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg"
        props: []
        name: Heroblock
      - name: Plant
        mediatype: Image
        image: "/content/images/ren-ran-bBiuSdck8tU-unsplash.jpg"
        path: ""
        props: []
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
            props: []
            type: ""
        type:
        mediatype: ""
        path: ""
        containsimage: false
        image: ""
        containsmedia: false
        props: []
        media: []
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
            props: []
            type: ""
        type:
        mediatype: ""
        path: ""
        containsimage: false
        image: ""
        containsmedia: false
        props: []
        media: []
  - template: heroblock2
    type: 0
    heading:
      - template: text
        type: Title
        props: []
        content: Youtube Title
    media:
      - name: Youtube Video
        mediatype: Youtube
        path: https://www.youtube.com/watch?v=7eoxulE1dJI
        image: ""
        props: []
    ctas: []
---
