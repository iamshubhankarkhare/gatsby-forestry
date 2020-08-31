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
    content: Description Description Description Description Description Description
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
    props: []
  mediatype: Image
  path: ''
  containsimage: false
  image: "/content/images/ruslan-bardash-g83y6do219w-unsplash.jpg"
  containsmedia: true
  props:
  - p=12|4
  media:
  - mediatype: Image
    path: ''
    image: "/content/images/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg"
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
    content: 'Subtitle Subtitle Subtitle Subtitle Subtitle '
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
    type: 
    mediatype: ''
    path: ''
    containsimage: false
    image: ''
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
  mediatype: Iframe
  image: "/content/images/anomaly-oRskqiH7FNc-unsplash.jpg"
  heading:
  - template: text
    type: Title
    props: []
    content: Youtube Video
  containsmedia: true
  path: <iframe width="560" height="315" src="https://www.youtube.com/embed/7eoxulE1dJI"
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
  ctas:
  - template: link
    props:
    - bg=primary.red
    - color=white
    linktext: Test CTA1
    url: "/homepage"
    variant: solid
  containsimage: false
  props: []
  media: []

---
