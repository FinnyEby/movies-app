import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyle = {
    content: {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%, -50%)'
    }
}

const TabContainer = function(props) {
    return(
        <Typography component="div" style={{padding : 0, textAlign : 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children : PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOepn : false,
            value : 0,
            username : "",
            userNameRequired : "dispNone"
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOepn : true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOepn : false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value})
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({userNameRequired : 'dispBlock'}) : this.setState({userNameRequired : 'dispNone'})
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username : e.target.value})
    }

    render() {
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} 
                isOpen={this.state.modalIsOepn}
                contentLabel="Login" 
                onRequestClose={this.closeModalHandler}
                style={customStyle}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.userNameRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="userPassword"> Password </InputLabel>
                            <Input id="userPassword" type="password"/>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                </Modal>
            </div>
        )
    }
}

export default Header;