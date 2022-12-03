import { create } from "@storybook/theming";
import logo from "../public/logo.svg";

export default create({
  colorPrimary: "#5162ff",
  colorSecondary: "#5162ff",

  // UI
  appContentBg: "white",
  appBorderColor: "#EBEDFF",
  appBorderRadius: 8,

  // Typography
  fontBase: "'Inter', sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: "black",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Pechk.in",
  brandUrl: "https://pechk.in",
  brandImage: logo,
  brandTarget: "_self",
});
