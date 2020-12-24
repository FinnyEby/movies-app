import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import './BookShow.css'; 
import Details from '../../screens/details/Details';

class BookShow extends Component {

    backToMovieDetailsHandler = () => {
        ReactDOM.render(
            <Details movieId={this.props.movieId}/>,
            document.getElementById('root')
          );
    }

    render() {
        return (
            <div className="main-container" >
                <Header />
                <div className="back-button" onClick={this.backToMovieDetailsHandler}>&#60; Back to Movie Details</div>
            </div>
        )
    }
}
export default BookShow;