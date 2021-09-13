import Api from '../../../api/api';
import { Track } from '../../../slices/trackSlice'

export interface PopularProps {
    track: Track;
}

export default function Popular(props: PopularProps){

    const track = props.track;
    const randomNumber = genRand(1, 10, 1);

    // https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript/45736188
    function genRand(min, max, decimalPlaces) {  
        var rand = Math.random()*(max-min) + min;
        var power = Math.pow(10, decimalPlaces);
        return Math.floor(rand*power) / power;
    }
    return (
        <div className="popular-box">
            <img src={track.imageUrl} alt={track.author}/>
            <div className="popular-text">
                <p className="popular-author">{track.author}</p>
                <p className="popular-followers">{randomNumber}M Followers</p>
            </div>
            <i className="fas fa-ellipsis-h fa-2x"></i>
        </div>
    );
}