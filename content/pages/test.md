---
name: test
path: test
sections:
- template: heroblock2
  type: 2
  heading:
  - template: text
    type: Title
    props:
    - color=white
    - fontSize=2xl|5xl
    content: This is a type 2 Title 
  - template: text
    type: Description
    props:
    - my=4
    - pr=8|20
    - color=white
    content: Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras faucibus, eros vitae condimentum vestibulum, augue ipsum congue augue,
      eget consectetur mauris purus non massa. Nulla facilisi. Proin ullamcorper libero
      efficitur sem dapibus, sit amet condimentum sapien tincidunt. Nam felis sem,
      tristique vel imperdiet faucibus, tincidunt at tortor. Nulla faucibus tincidunt
      lectus, sed luctus nulla tristique ac. Nunc consectetur odio massa, eu molestie
      enim aliquam vel. Nullam nulla turpis, maximus vel est quis, vestibulum dictum
      leo. Description
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
  props:
  - px=12
  - py=12|20
  - bg=secondary.black
  media:
  - mediatype: Image
    path: ''
    image: "/images/vincent-burkhead-LhlxYMfnTF0-unsplash.jpg"
    props:
    - size=xs
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
- template: heroblock2
  type: 3
  heading:
  - template: text
    type: Title
    props:
    - color=white
    - fontSize=2xl|5xl
    - alignSelf=center
    content: THIS IS A Type 3 TITLE 
  - template: text
    type: Description
    props:
    - color=white
    - my=4|8
    - mx=4|20
    - alignSelf=center
    content: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras faucibus, eros vitae condimentum vestibulum, augue ipsum congue augue,
      eget consectetur mauris purus non massa. Nulla facilisi. Proin ullamcorper libero
      efficitur sem dapibus, sit amet condimentum sapien tincidunt. Nam felis sem,
      tristique vel imperdiet faucibus, tincidunt at tortor. Nulla faucibus tincidunt
      lectus, sed luctus nulla tristique ac. Nunc consectetur odio massa, eu molestie
      enim aliquam vel. Nullam nulla turpis, maximus vel est quis, vestibulum dictum
      leo.

'
  ctas:
  - template: link
    props:
    - bg=primary.red
    - color=white
    - mb=4|12
    type: button
    url: "/"
    linktext: New Cta
  media:
  - mediatype: Image
    name: img
    image: "images/ren-ran-bBiuSdck8tU-unsplash.jpg"
    props:
    - size=md
    path: ''
  props:
  - px=12|20
  - pt=12|20
  - bg=secondary.black
- template: heroblock2
  type: 4
  heading:
  - template: text
    type: Title
    props:
    - color=white
    - fontSize=2xl|5xl
    - mt=4
    content: THIS IS A Type 4 TITLE 
  - template: text
    type: Description
    props:
    - color=white
    - my=4|8
    - mr=4|16
    content: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras faucibus, eros vitae condimentum vestibulum, augue ipsum congue augue,
      eget consectetur mauris purus non massa. Nulla facilisi. Proin ullamcorper libero
      efficitur sem dapibus, sit amet condimentum sapien tincidunt. Nam felis sem,
      tristique vel imperdiet faucibus, tincidunt at tortor. Nulla faucibus tincidunt
      lectus, sed luctus nulla tristique ac. Nunc consectetur odio massa, eu molestie
      enim aliquam vel. Nullam nulla turpis, maximus vel est quis, vestibulum dictum
      leo.

'
  ctas:
  - template: link
    props:
    - bg=primary.red
    - color=white
    - my=4
    type: button
    url: "/"
    linktext: New Cta
  media:
  - mediatype: Image
    name: img
    image: "images/ren-ran-bBiuSdck8tU-unsplash.jpg"
    props:
    - size=2xl
    path: ''
  props:
  - bg=secondary.black
  - minH=100vh
- template: heroblock2
  type: 5
  heading:
  - template: text
    type: Title
    props:
    - color=white
    - fontSize=2xl|5xl
    - mt=4
    - alignSelf=center
    content: THIS IS A Type 5 TITLE 
  - template: text
    type: Description
    props:
    - color=white
    - my=4|8
    - mx=8|20
    - alignSelf=center
    content: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras faucibus, eros vitae condimentum vestibulum, augue ipsum congue augue,
      eget consectetur mauris purus non massa. Nulla facilisi. Proin ullamcorper libero
      efficitur sem dapibus, sit amet condimentum sapien tincidunt. Nam felis sem,
      tristique vel imperdiet faucibus, tincidunt at tortor. Nulla faucibus tincidunt
      lectus, sed luctus nulla tristique ac. Nunc consectetur odio massa, eu molestie
      enim aliquam vel. Nullam nulla turpis, maximus vel est quis, vestibulum dictum
      leo.

'
  ctas:
  - template: link
    props:
    - bg=primary.red
    - color=white
    - my=4
    - mx=auto 
    type: button
    url: "/"
    linktext: New Cta
  media:
  - mediatype: Image
    name: img
    image: "images/ren-ran-bBiuSdck8tU-unsplash.jpg"
    props:
    - size=2xl
    path: ''
  props:
  - bg=secondary.black
  - minH=100vh
  - align=center
  - justify=center
 
---
