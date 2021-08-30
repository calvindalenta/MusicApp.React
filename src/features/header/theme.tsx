import {createTheme } from "@material-ui/core"

const defaultTheme = createTheme();
const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "3rem"
        }
      }
    }
  }
}

export default theme