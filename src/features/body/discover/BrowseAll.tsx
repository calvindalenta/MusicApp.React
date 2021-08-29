import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectTrackState, Track } from "../../../slices/trackSlice";
import BrowseAllCard from "./BrowseAllCard";

function BrowseAll(){
    const trackState = useSelector(selectTrackState);
    const genres: Map<string, Track> = new Map<string, Track>();
    trackState.value.forEach(track => {
        if (genres.has(track.genre)){
            // let genre = genres.get(track.genre);
            // genre.push(track);
            // genres.set(track.genre, genre);
            return;
        }
        genres.set(track.genre, track);
        return;
    })
    let cards: JSX.Element[] = [];

    genres.forEach((value, key) => {
        const result = 
        <Grid item xs={2} key={key}>
            <BrowseAllCard  track={value}/>
        </Grid>
        cards.push(result);
    });

    return (
        <div>
            <b>Browse All</b>
            <Grid container spacing={3}>
                {cards}
            </Grid>
        </div>

    );
}

export default BrowseAll;