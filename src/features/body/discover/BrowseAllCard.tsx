import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography, useTheme } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
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
    maxWidth: 240,
    [theme.breakpoints.down("sm")] : {
        maxWidth: 160,
    }
  },
  media: {
    height: 100,
    [theme.breakpoints.down("sm")] : {
        maxHeight: 80,   
    }
  }
}));

function BrowseAllCard(props){
    const classes = useStyles();
    const track: Track = props.track;
    const imageUrl = "/api/image/" + track.id;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={imageUrl}
                title={track.title}
                />
                <Typography variant="subtitle1" noWrap={true} style={{ position: 'absolute', color: 'white', textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000', top: '40%', left: '30%', transform: 'translateX(-50%)' }}>
                    {track.genre}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default BrowseAllCard;