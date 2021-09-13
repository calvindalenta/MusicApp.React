import { ListItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../../slices/playerSlice';
import { Track } from '../../../slices/trackSlice'

export interface TrendingProps {
    track: Track;
}

export default function Trending(props: TrendingProps){

    const dispatch = useDispatch();

    return (
        <ListItem button className="trending-box" onClick={() => dispatch(setCurrentTrack(props.track))}>
            <i className="fas fa-play-circle fa-3x"></i>
            <div className="trending-text">
                <p className="trending-title">{props.track.title}</p>
                <p className="trending-author">{props.track.author}</p>
            </div>
            <p className="trending-duration">
                03:37
            </p>
        </ListItem>
    );

}