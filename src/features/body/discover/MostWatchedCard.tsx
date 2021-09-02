import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createTheme, IconButton, makeStyles, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../../slices/playerSlice";
import { Track } from "../../../slices/trackSlice";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 180,
//   },
//   media: {
//     height: 140,
//     maxHeight: 140,
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("sm")] : {
        maxWidth: 200,
        maxHeight: 140 ,   
    }
  },
  media: {
    height: 140,
    [theme.breakpoints.down("sm")] : {
        maxHeight: 80,   
    }
  }
}));

let theme = createTheme();

theme.typography.subtitle2 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
};

theme.typography.subtitle1 = {
  fontSize: '0.6rem',
  '@media (min-width:600px)': {
    fontSize: '0.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
};

theme.typography.h6 = {
  fontSize: '0.78rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

theme.typography.body1 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
};

function MostWatchedCard(props){    
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
                <CardContent>
                    <ThemeProvider theme={theme}>
                        <Typography variant="subtitle2" noWrap={true}>
                            {track.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" noWrap={true}>
                            {track.author}
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MostWatchedCard;