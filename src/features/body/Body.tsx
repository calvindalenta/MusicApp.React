import { Grid, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Discover from './discover/Discover';

function Body(){
    const useStyles = makeStyles((theme) => ({
        link: {
            textDecoration: 'none',
            color: 'black',
        },
    }));

    const classes = useStyles();

    return(
        <Router>
            <div className="body">
                <Grid container>
                    <Grid item xs={2} style={{backgroundColor: 'white'}}>
                        <List component="nav" aria-label="secondary">
                            <Link to="/" className={classes.link}>
                                <ListItem button>
                                    <ListItemText primary="Discover" />
                                </ListItem>
                            </Link>
                            <Link to="/albums" className={classes.link}>
                                <ListItem button>
                                    <ListItemText primary="Albums" />
                                </ListItem>
                            </Link>
                            <Link to="/artists" className={classes.link}>
                                <ListItem button>
                                    <ListItemText primary="Artists" />
                                </ListItem>
                            </Link>
                        </List>
                    </Grid>
                    <Grid item xs={10} style={{backgroundColor: 'yellow'}}>
                    <Switch>
                        <Route exact path="/">
                            <Discover/>
                        </Route>
                        <Route path="/albums">
                            Albums
                        </Route>
                        <Route path="/artists">
                            Artists
                        </Route>
                    </Switch>
                    </Grid>
                </Grid>
            </div>
        </Router>
    );
}

export default Body;