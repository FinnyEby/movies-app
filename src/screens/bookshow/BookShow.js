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
            location: "",
            language: "",
            date: "",
            time: ""
        }
    }

    backToMovieDetailsHandler = () => {
        ReactDOM.render(
            <Details movieId={this.props.movieId} />,
            document.getElementById('root')
        );
    }

    locationChangeHandler = (e) => {
        this.setState({ location: e.target.value })
    }

    languageChangeHandler = (e) => {
        this.setState({ language: e.target.value })
    }

    dateChangeHandler = (e) => {
        this.setState({ date: e.target.value })
    }

    timeChangehandler = (e) => {
        this.setState({ time: e.target.value})
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
                        </CardContent><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location:</InputLabel>
                            <Select id="location" value={this.state.location} onChange={this.locationChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>{loc.location}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="language">Choose Language:</InputLabel>
                            <Select id="language" value={this.state.language} onChange={this.languageChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang" + lang.id} value={lang.language}>{lang.language}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="date">Choose Show Date:</InputLabel>
                            <Select id="date" value={this.state.date} onChange={this.dateChangeHandler}>
                                {showDate.map(date => (
                                    <MenuItem key={"date" + date.id} value={date.showDate}>{date.showDate}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/><br/>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="time">Choose Show Time:</InputLabel>
                            <Select id="time" value={this.state.time} onChange={this.timeChangehandler}>
                                {showTime.map(time =>(
                                    <MenuItem key={"time"+time.id} value={time.showTime}>{time.showTime}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/><br/>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;