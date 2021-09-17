import { Track } from "../../slices/trackSlice";
import React from "react";

export interface TrackInfoProps {
    track: Track;
}

export default function TrackInfo(props: TrackInfoProps){

    const track = props.track;

    const title = track !== null ? track.title : 'No Title';

    const author = track !== null ? track.author : 'No Title';;

    const imageSource = track !== null ? track.imageUrl : 'api/image/default';

    return (
        <React.Fragment>
            <img src={imageSource} alt={author}/>
            <div className="player-left-text">
                <p className="author">{title}</p>
                <p className="description">{author}</p>
            </div>
        </React.Fragment>
    );
}