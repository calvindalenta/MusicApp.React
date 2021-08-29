import { Grid } from '@material-ui/core';

function Body(){
    return(
        <div className="body">
            <Grid container>
                <Grid item xs={2} style={{backgroundColor: 'red'}}>
                    Uhm
                </Grid>
                <Grid item xs={10} style={{backgroundColor: 'yellow'}}>
                    Yeah
                </Grid>
            </Grid>
        </div>
    );
}

export default Body;