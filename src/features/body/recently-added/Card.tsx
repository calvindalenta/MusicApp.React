import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../../slices/playerSlice";
import { Track } from "../../../slices/trackSlice";

export interface CardProps {
    track: Track;
}

export default function Card(props: CardProps) {

    const track = props.track;
    const dispatch = useDispatch();

    return (
    <div className="card" onClick={() => dispatch(setCurrentTrack(track))}>
        <div className="card-image">
            <img src={track.imageUrl} alt={track.author + ' - ' + track.title}/>
        </div>
        <div className="card-footer">
            <div className="card-text">
                <p className="track-title">{track.title}</p>
                <p className="track-author">{track.author}</p>
            </div>
            <div className="card-control">
                <i className="fas fa-ellipsis-v fa-2x"></i>
            </div>
        </div>
    </div>
    );
}