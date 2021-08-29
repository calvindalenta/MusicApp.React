import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectTrackState } from "../../../slices/trackSlice";
import MostWatchedCard from "./MostWatchedCard";

function MostWatched(){
    const trackState = useSelector(selectTrackState);
    const cards = trackState.value.map(track => {
        const result =
        <Grid item xs={2} key={track.id}>
            <MostWatchedCard key={track.id} track={track}/>
        </Grid>
        return result;
    })

    return (
        <div>
            <b>Most Watched</b>
            <Grid container spacing={3}>
                {cards}
            </Grid>
        </div>

    );
}

export default MostWatched;