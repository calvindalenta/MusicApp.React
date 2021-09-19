import { Track } from "../../slices/trackSlice";
import React from "react";

export interface TrackInfoProps {
    track: Track;
    children: (title: string, author: string, imageSource: string) => JSX.Element;
}

export default function TrackInfo(props: TrackInfoProps){

    const track = props.track;

    const title = track !== null ? track.title : 'No Title';

    const author = track !== null ? track.author : 'No Title';;

    const imageSource = track !== null ? track.imageUrl : 'api/image/default';

    return (
        <React.Fragment>
            {props.children(title, author, imageSource)}
        </React.Fragment>
    );
}