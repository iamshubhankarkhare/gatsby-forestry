const types = `
union Section = HeroBlock | CardBlock

type MarkdownRemark implements Node { frontmatter: Frontmatter }

type HeroBlock implements Node  @dontInfer{
    template : !String
    heading: String
    subtitle: String
    body: String
    type: Int
}

type Card implements Node @dontInfer{
    heading: String
    subtitle: String
    body: String
}

type CardBlock implements Node @dontInfer{
    template : !String
    heading: String
    subtitle: String
    card: [Card]
}

type Page implements Node @dontInfer{
    blocks: [Section]
    
    __resolveType(value){
        if (value.template === "heroblock") {
            return "HeroBlock"
          }
          if (value.template === "cardblock") {
            return "CardBlock"
          }
    }
}

type Frontmatter implements Node @dontInfer{
    blocks : [Page]
}

`
