import { Grid, List, ListItemText, makeStyles, withStyles, ListItem} from '@material-ui/core';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Discover from './discover/Discover';

function Body(){
    const useStyles = makeStyles((theme) => ({
        body:{
            height: '70vh',
            backgroundColor: 'lightblue',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
        },
        buttonActive: {
            backgroundColor: '#ffcb19',
            borderRadius: '25px',
            textAlign: 'center',
        },
        button: {
            borderRadius: '25px',
            textAlign: 'center',
        }
    }));

    const classes = useStyles();
    
    // Overriding the default ListItem
    // https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-material-ui
    const ListItemEx = withStyles({
    root: {
        "&$selected": {
            backgroundColor: '#ffcb19',
            borderRadius: '25px',
            textAlign: 'center',
        },
        "&$selected:hover": {
            backgroundColor: '#ffcb19',
            opacity: '0.8',
            borderRadius: '25px',
            textAlign: 'center',
        },
        "&:hover": {
        "& .MuiListItemIcon-root": {
            color: "white"
        }
        }
    },
    selected: {}
    })(ListItem);

    const list = [
        {link: '/', text: 'Discover'},
        {link: '/albums', text: 'Albums'},
        {link: '/artists', text: 'Artists'},
    ];

    const [selectedLink, setSelectedLink] = useState('Discover');

    const listView = list.map(target => 
    {
        const result =
        <Link to={target.link} className={classes.link}>
            <ListItemEx 
            button
            className={classes.button}
            selected={selectedLink === target.text ? true : false}
            onClick={(event) => setSelectedLink(target.text)}
            >
                <ListItemText primary={target.text} />
            </ListItemEx>
        </Link>
        return result;
    });

    return(
        <Router>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={2}>
                        <List component="nav" aria-label="secondary">
                            {listView}
                        </List>
                    </Grid>
                    <Grid item xs={10}>
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