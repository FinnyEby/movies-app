import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import Home from '../home/Home';
import Youtube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId;
        })[0];
        this.setState({ currentState })
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    artistClickHandler = () => {

    }

    render() {
        let movie = this.state.movie;
        const opts = {
            height : '500',
            width : '700',
            playerVars: {
                autoplay : 1
            }
        }
        return (
            <div className="details">
                <Header />
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>&#60; Back to Home</Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div><br />
                        <div>
                            <Typography><span className="bold">Genre:</span> {movie.genres.join(',')}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {movie.duration}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(movie.release_date).toDateString()}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Rating:</span> {movie.critics_rating}</Typography>
                        </div><br />
                        <div>
                            <Typography><span className="bold">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}</Typography>
                        </div>
                        <div className="trailerContainer">
                            <div>
                                <Typography><span className="bold">Trailer:</span></Typography>
                            </div>
                            <Youtube videoId={movie.trailer_url.split("?v=")[1]} 
                            opts={opts}
                            onReady={this._onReady}/>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <Typography><span className="bold">Artist:</span></Typography><br/>
                            <GridList>
                                {movie.artists.map(artist => (
                                    <GridListTile key={artist.id}>
                                        <img src={artist.profile_url} alt={artist.name}/>
                                        <GridListTileBar title={artist.first_name+" "+artist.last_name}></GridListTileBar>
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;