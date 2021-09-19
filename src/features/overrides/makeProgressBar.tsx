import { Slider, withStyles } from "@material-ui/core";

export const makeProgressBar = (styles: any) => {
    const result = withStyles(styles)(Slider)
    return result;
}