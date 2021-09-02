import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography, useTheme } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../../slices/playerSlice";
import { Track } from "../../../slices/trackSlice";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 260,
//   },
//   media: {
//     height: 100,
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 420,
    [theme.breakpoints.down("sm")] : {
        maxWidth: 300,
    }
  },
  media: {
    height: 240,
    [theme.breakpoints.down("sm")] : {
        maxHeight: 180,   
    }
  }
}));

function TrendingCard(props){
    const classes = useStyles();
    const track: Track = props.track;
    const imageUrl = "/api/image/" + track.id;

    const dispatch = useDispatch();
    
    return (
        <Card className={classes.root} onClick={(e) => dispatch(setCurrentTrack(track))}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imageUrl}
                title={track.title}
                />
                <Typography variant="h6" noWrap={true} style={{ position: 'absolute', color: 'white', textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000', bottom: '5%', left: '5%',}}>
                    {track.title + ' by ' + track.author} 
                </Typography>
                <Typography variant="subtitle1" noWrap={true} style={{ position: 'absolute', color: 'white', textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000', bottom: '5%', right: '5%',}}>
                    983,188 views
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default TrendingCard;