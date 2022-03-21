import theme from "../src/theme";
import { MockedProvider } from "@apollo/client/testing";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  apolloClient: {
    MockedProvider,
  },
};
