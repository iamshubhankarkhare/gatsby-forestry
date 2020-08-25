// Default theme
import { theme as base } from "@chakra-ui/core"

export const theme = {
  ...base,

  // breakpoints: [
  //   '21em', // 336px, phone_portrait
  //   '35em', // 560px, phone_landscape
  //   '45em', // 720px, tablet_portrait
  //   '64em', // 1024px, tablet_landscape
  //   '75em', // 1200px, desktop_s
  //   // '90em', // 1400px
  //   // '100em', // 1600px
  // ],
  // breakpoints: ["21em", "35em", "45em", "64em"],

  fonts: {
    body: "Barlow",
    heading: "'Barlow Condensed', sans-serif",
  },

  colors: {
    ...base.colors,
    primary: {
      orange: "#f16322 ",
      red: "#e23157 ",
      yellow: "#edc31a",
    },
    secondary: {
      blue1: "#4997d2 ",
      blue2: "#3951a2",
      blue3: "#2a417f ",
      purple: "#be4498",
      black: "#272725",
      green: "#51b748",
    },
  },
}

const fs = theme.fontSizes

theme.fontSizes = {
  ...fs,
  h0: [fs["2xl"], fs["3xl"], fs["5xl"], fs["6xl"]],
  h1: [fs["xl"], fs["2xl"], fs["3xl"], fs["5xl"]],
  h2: [fs["xl"], fs["xl"], fs["2xl"], fs["3xl"]],
  h3: [fs["lg"], fs["lg"], fs["xl"], fs["2xl"]],
  h4: [fs["sm"], fs["md"], fs["md"], fs["md"]],
}

export default theme
