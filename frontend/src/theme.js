import { extendTheme } from '@chakra-ui/react';


const textStyles = {
  h1: {
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: ["36px", "42px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h3: {
    fontSize: ["27px", "30px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h4: {
    fontSize: ["16px", "20px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h5: {
    fontSize: ["10px", "14px"],
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
};

const fonts = {
  heading: `'Kanit', sans-serif`,
  body: `'Kanit', sans-serif`
};

const theme = extendTheme({ fonts, textStyles});

export default theme;