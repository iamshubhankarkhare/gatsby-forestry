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
          - color=primary.yellow|primary.red
          - bg=secondary.blue3|primary.yellow
          - fontSize=xl|2xl|3xl
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
        props:
          - color=white
          - bg=primary.red
        type: button
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
  - template: cardblock2
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
      type: ''
    type: 
    mediatype: ''
    path: ''
    containsimage: false
    image: ''
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
    image: ''
    props: []
  ctas:
  - template: link
    props:
    - color=secondary.blue3
    - fontSize=xl|2xl
    url: "/"
    linktext: There's no place like 127.0.0.1
    type: link

---
