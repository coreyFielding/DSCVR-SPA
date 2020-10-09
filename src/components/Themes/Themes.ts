export const lightTheme = {
  body: "#eee",
  text: "#222831",
  widget: "#fff",

  // Header
  background: "#fff",

  // Sidebar
  sidebar: "#fff",
  hover: "10,132,255",
  sidebar_header: "#fff",
  sidebar_text: "#232931",
  text_hover: "rgba(10,132,255, 1)",

  // Input
  input_bg: "#fff",
  input_border: "fff",
};

export const darkTheme = {
  body: "#232931",
  text: "#FAFAFA",
  border: "#6B8096",
  widget: "#16213e",

  //Sidebar
  sidebar: "#283149",
  hover: "#404b69",
  background: "#6b778d",
  sidebar_header: "#404b69",

  // Input
  input_bg: "#393e46",
  input_border: "#6B7482",
};

type LightTheme = typeof lightTheme;
type DarkTheme = typeof darkTheme;

export { LightTheme, DarkTheme };
