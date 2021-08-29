import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography, useTheme } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Track } from "../../../slices/trackSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 100,
  },
});

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
                <Typography component="h4" variant="h6" noWrap={true} style={{ position: 'absolute', color: 'white', textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000', top: '40%', left: '30%', transform: 'translateX(-50%)' }}>
                    {track.genre}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default BrowseAllCard;