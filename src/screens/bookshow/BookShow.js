import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import './BookShow.css'; 
import Details from '../../screens/details/Details';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location : ""
        }
    }

    backToMovieDetailsHandler = () => {
        ReactDOM.render(
            <Details movieId={this.props.movieId}/>,
            document.getElementById('root')
          );
    }

    locationChangeHandler = (e) => {
        this.setState({location : e.target.value})
    } 

    render() {
        return (
            <div className="main-container" >
                <Header />
                <div className="bookShow">
                    <Typography className="back-button" onClick={this.backToMovieDetailsHandler}>&#60; Back to Movie Details</Typography>
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">BOOK SHOW</Typography>
                        </CardContent><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location:</InputLabel>
                            <Select
                            value={this.state.location}
                            onChange={this.locationChangeHandler}>
                            {location.map(loc => (
                                <MenuItem key={"loc"+loc.id} value={loc.location}>{loc.location}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;