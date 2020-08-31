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
    - alignSelf=center
    - color=secondary.blue3 
    content: This is the Hero Block Title
  - template: text
    type: Subtitle
    props: 
    - px=4|12
    - my=4
    - fontSize=2xl|3xl
    content: This is the Subtitle
  - template: text
    type: Description
    props:
    - px=4|12
    - my=4
    content: Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus, eros vitae condimentum vestibulum, augue ipsum congue augue, eget consectetur mauris purus non massa. Nulla facilisi. Proin ullamcorper libero efficitur sem dapibus, sit amet condimentum sapien tincidunt. Nam felis sem, tristique vel imperdiet faucibus, tincidunt at tortor. Nulla faucibus tincidunt lectus, sed luctus nulla tristique ac. Nunc consectetur odio massa, eu molestie enim aliquam vel. Nullam nulla turpis, maximus vel est quis, vestibulum dictum leo.
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
    props:
    - color=white
    - variant=solid
    - my=4
    - bg=primary.red
    type: button
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
    name: Heroblock
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
      type: ''
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
