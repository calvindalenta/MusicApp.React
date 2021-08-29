import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography, useTheme } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Track } from "../../../slices/trackSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 180,
  },
  media: {
    height: 140,
  },
});

function MostWatchedCard(props){
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
                <CardContent>
                    <Typography variant="subtitle2" color="textSecondary">
                        {track.author}
                    </Typography>
                    <Typography component="h6" variant="body1" noWrap={true}>
                        {track.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MostWatchedCard;