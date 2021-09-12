import './Body.scss'
import { Grid, List, ListItemText, makeStyles, withStyles, ListItem} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Discover from './discover/Discover';
import Nav from './nav/Nav';
import CardView from './recently-added/CardView';
import Album from './album/Album';
import TrendingView from './trending/TrendingView';
import PopularView from './popular/PopularView';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../slices/trackSlice';

function Body(){
    const useStyles = makeStyles((theme) => ({
        body:{
            height: '70vh',
            paddingBottom: '25rem',
            // backgroundColor: 'lightblue',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
        },
        buttonActive: {
            backgroundColor: '#ffcb19',
            borderRadius: '25px',
            //textAlign: 'center',
        },
        button: {
            borderRadius: '25px',
            // textAlign: 'center',
            // verticalAlign: 'middle',
            padding: '0.5rem'
        },
        list: {
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "center",
            width: '100%',
        },
        listIcon: {
            marginLeft: '10%'
        },
        listText: {
            marginLeft: '10%',
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
            //textAlign: 'center',
        },
        "&$selected:hover": {
            backgroundColor: '#ffcb19',
            opacity: '0.8',
            borderRadius: '25px',
            //textAlign: 'center',
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
        {link: '/', text: 'Discover', icon: <HomeIcon className={classes.listIcon}/>},
        {link: '/artists', text: 'Artists', icon: <QueueMusicIcon className={classes.listIcon}/>},
        {link: '/genre', text: 'Genre', icon: <LibraryMusicIcon className={classes.listIcon}/>},
    ];

    const [selectedLink, setSelectedLink] = useState('Discover');

    const listView = list.map(target => 
    {
        const result =
        <Link to={target.link} className={classes.link} key={target.text}>
            <ListItemEx 
            button
            className={classes.button}
            selected={selectedLink === target.text ? true : false}
            onClick={(event) => setSelectedLink(target.text)}
            >
                {target.icon}
                <ListItemText primary={target.text} className={classes.listText}/>
            </ListItemEx>
        </Link>
        return result;
    });

    return(
        <main>
            <Nav/>
            {
            useSelector(selectTrackState).status === 'succeeded' ?
            <div className="main-section">
                <section><Album/></section>
                <section><TrendingView/></section>
                <section><CardView/></section>
                <section><PopularView/></section>
            </div> :
            ''
            }
            
        </main>
    );
}

export default Body;