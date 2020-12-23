import React, {Component} from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

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
            movieName: "",
            genres : [],
            artists : []
        }
    }
    movieNameChangeHandler = (e) => {
        this.setState({movieName : e.target.value})
    }

    genreSelectHandler = (e) => {
        this.setState({genres : e.target.value})
    }

    artistSelectHandler = (e) => {
        this.setState({artists : e.target.value})
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
                                    <img src={movie.poster_url} alt={movie.title}/>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genre</InputLabel>
                                    <Select
                                    multiple
                                    input={<Input id = "select-multiple-checbox"/>}
                                    renderValue={selected => selected.join(',')}
                                    value={this.state.genres}
                                    onChange={this.genreSelectHandler}>
                                        <MenuItem value="None"> None </MenuItem> 
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                    multiple
                                    input={<Input id = "select-multiple-checbox"/>}
                                    renderValue={selected => selected.join(',')}
                                    value={this.state.artists}
                                    onChange={this.artistSelectHandler}>
                                        <MenuItem value="None"> None </MenuItem> 
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name+" "+artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name+" "+artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name+" "+artist.last_name}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                    id="releaseDateStart"
                                    label = "Release Date Start"
                                    type="date"
                                    InputLabelProps={{shrink : true}}/>
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