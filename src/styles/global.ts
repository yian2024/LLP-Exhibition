import { globalCss } from "@stitches/react";

export const rem = 20;
export const headerHeight = 60.533333;

const defaults = {
  body: {
    margin: 0,
    padding: 0,
  },

  html: {
    fontFamily: "$sans",
    fontSize: `${rem}px`,
    fontWeight: "500",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
    paddingTop: `${headerHeight}px`,
  },

  "ul, ol": {
    li: {
      paddingBottom: "$gr1",
    },
  },

  dl: {
    dt: {
      fontWeight: "400",
    },
    dd: {
      marginInlineStart: "0",
      paddingBottom: "$gr4",
      lineHeight: "1.47em",
    },
  },

  /**
   * define Radix Themes "purple" family as Northwestern brand colors
   */
  ".radix-themes": {
    // baseline purples
    "--purple-1": "rgb(228, 224, 238)", // Northwestern Purple 10
    "--purple-2": "rgb(204, 196, 223)", // Northwestern Purple 20
    "--purple-3": "rgb(182, 172, 209)", // Northwestern Purple 30
    "--purple-4": "rgb(164, 149, 195)", // Northwestern Purple 40
    "--purple-5": "rgb(147, 128, 182)", // Northwestern Purple 50
    "--purple-6": "rgb(131, 110, 170)", // Northwestern Purple 60
    "--purple-7": "rgb(118, 93, 160)", // Northwestern Purple 70
    "--purple-8": "rgb(104, 76, 150)", // Northwestern Purple 80
    "--purple-9": "rgb(78, 42, 132)", // Northwestern Purple, i.e., the brand
    "--purple-10": "rgb(64, 31, 104)", // Northwestern Purple 120
    "--purple-11": "rgb(48, 16, 78)", // Northwestern Purple 140
    "--purple-12": "rgb(29, 2, 53)", // Northwestern Purple 160

    // purples with alpha
    "--purple-a1": "rgba(var(--purple-1), 0.382)",
    "--purple-a2": "rgba(var(--purple-1), 0.618)",
    "--purple-a3": "var(--purple-1)",
    "--purple-a4": "var(--purple-2)",
    "--purple-a5": "var(--purple-3)",
    "--purple-a6": "var(--purple-4)",
    "--purple-a7": "var(--purple-5)",
    "--purple-a8": "var(--purple-6))",
    "--purple-a9": "var(--purple-7)",
    "--purple-a10": "var(--purple-8)",
    "--purple-a11": "var(--purple-9)",
    "--purple-a12": "var(--purple-10)",
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;
