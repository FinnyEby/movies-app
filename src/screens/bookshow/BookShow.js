import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import './BookShow.css';
import Details from '../../screens/details/Details';
import Confirmation from '../confirmation/Confirmation.js'
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            date: "",
            time: "",
            tickets: 0,
            availableTickets: 20,
            unitprice: 500,
            total: "0",
            locationrequired: "dispNone",
            languagerequired: "dispNone",
            daterequired: "dispNone",
            timerequired: "dispNone",
            ticketsrequired: "dispNone"
        }
    }

    backToMovieDetailsHandler = () => {
        ReactDOM.render(
            <Details movieId={this.props.movieId} />,
            document.getElementById('root')
        );
    }

    confirmationPageHandler = () => {
        if(this.state.location !== "" && this.state.language !== "" && this.state.date !== "" && this.state.time !== "" && this.state.tickets !== 0) {
            ReactDOM.render(<Confirmation movieId={this.props.movieId}  bookingSummary={this.state} location={this.state.location} language={this.state.language} date={this.state.date} time={this.state.time} tickets={this.state.tickets} unitPrice={this.state.unitprice}/>, document.getElementById('root'))
        }
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
        this.setState({ time: e.target.value })
    }

    ticketsChangeHandler = (e) => {
        this.setState({ tickets: e.target.value })
    }

    bookShowClickHandler = () => {
        this.state.location == "" ? this.setState({locationrequired : "dispBlock"}) : this.setState({locationrequired : "dispNone"})
        this.state.language == "" ? this.setState({languagerequired : "dispBlock"}) : this.setState({languagerequired : "dispNone"})
        this.state.date == "" ? this.setState({daterequired : "dispBlock"}) : this.setState({daterequired : "dispNone"})
        this.state.time == "" ? this.setState({timerequired : "dispBlock"}) : this.setState({timerequired : "dispNone"})
        this.state.tickets == "" ? this.setState({ticketsrequired : "dispBlock"}) : this.setState({ticketsrequired : "dispNone"})
        this.confirmationPageHandler()
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
                            <FormHelperText className={this.state.locationrequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="language">Choose Language:</InputLabel>
                            <Select id="language" value={this.state.language} onChange={this.languageChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang" + lang.id} value={lang.language}>{lang.language}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.languagerequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="date">Choose Show Date:</InputLabel>
                            <Select id="date" value={this.state.date} onChange={this.dateChangeHandler}>
                                {showDate.map(date => (
                                    <MenuItem key={"date" + date.id} value={date.showDate}>{date.showDate}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.daterequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="time">Choose Show Time:</InputLabel>
                            <Select id="time" value={this.state.time} onChange={this.timeChangehandler}>
                                {showTime.map(time => (
                                    <MenuItem key={"time" + time.id} value={time.showTime}>{time.showTime}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText className={this.state.timerequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} available)</InputLabel>
                            <Input id="tickets" type="text" onChange={this.ticketsChangeHandler} value={this.state.tickets !== 0 ? this.state.tickets : ""} />
                            <FormHelperText className={this.state.ticketsrequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <Typography className="formControl">
                            Unit Price: Rs. 500
                        </Typography><br />
                        <Typography className="formControl">
                            Total Price: Rs. {this.state.unitprice * this.state.tickets}
                        </Typography><br /><br />
                        <Button variant="contained" color="primary" onClick={this.bookShowClickHandler}>BOOK SHOW</Button>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;