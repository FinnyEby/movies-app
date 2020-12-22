import React, {Component} from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#4ad841',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieName: ""
        }
    }
    movieNameChangeHandler = (e) => {
        this.setState({movieName : e.target.value})
    }
    render() {
        const { classes } = this.props;
        return(
            <div>
                <Header/>
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className="main-comtainer">
                    <div className="movies-list">
                        <GridList cols={3} spacing={25} cellHeight={'auto'}>
                            {moviesData.map(movie => (
                                <GridListTile key={movie.id} className="movies">
                                    <img src={movie.poster_url} />
                                    <GridListTileBar title={movie.title} subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}/>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="filter">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.Typography} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" type="text" onChange={this.movieNameChangeHandler} />
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);