import { createTheme, Grid, responsiveFontSizes, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectTrackState } from "../../../slices/trackSlice";
import MostWatchedCard from "./MostWatchedCard";


function MostWatched(){
    const trackState = useSelector(selectTrackState);
    const maxCard = 5;
    const cards = trackState.value.map((track, index) => {
        if (index >= maxCard) return null;
        const result =
        <Grid item xs={2} key={track.id}>
            <MostWatchedCard key={track.id} track={track}/>
        </Grid>
        return result;
    })

    return (
        <div>
            <Typography variant='h6'>
                Most Watched
            </Typography>
            <Grid container spacing={3}>
                {cards}
            </Grid>
        </div>

    );
}

export default MostWatched;