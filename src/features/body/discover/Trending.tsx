import { createTheme, Grid, responsiveFontSizes, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectTrackState } from "../../../slices/trackSlice";
import TrendingCard from "./TrendingCard";


function Trending(){
    const trackState = useSelector(selectTrackState);
    const track = trackState.value[trackState.value.length - 2];

    return (
        <div>
            <Typography variant='h6'>
                Trending
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={12} key={track.id}>
                    <TrendingCard track={track}/>
                </Grid>
            </Grid>
        </div>

    );
}

export default Trending;