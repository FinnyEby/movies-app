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
            password : "",
            firstname : "",
            lastname : "",
            email : "",
            regpassword : "",
            contactno : "",
            userNameRequired : "dispNone",
            passwordRequired : "dispNone",
            firstNameRequired : "dispNone",
            lastNameRequired : "dispNone",
            emailRequired : "dispNone",
            regPasswordRequired : "dispNone",
            contactNoRequired : "dispNone",
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOepn : true})
    }

    closeModalHandler = () => {
        this.setState({modalIsOepn : false})
        this.setState({value : 0})
        this.setState({username : ""})
        this.setState({password : ""})
        this.setState({firstname : ""})
        this.setState({lastname : ""})
        this.setState({email : ""})
        this.setState({regpassword : ""})
        this.setState({contactno : ""})
        this.setState({userNameRequired : 'dispNone'})
        this.setState({passwordRequired : 'dispNone'})
        this.setState({firstNameRequired : "dispNone"})
        this.setState({lastNameRequired : "dispNone"})
        this.setState({emailRequired : "dispNone"})
        this.setState({regPasswordRequired : "dispNone"})
        this.setState({contactNoRequired : "dispNone"})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value})
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({userNameRequired : 'dispBlock'}) : this.setState({userNameRequired : 'dispNone'})
        this.state.password === "" ? this.setState({passwordRequired : 'dispBlock'}) : this.setState({passwordRequired : 'dispNone'})
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstNameRequired : 'dispBlock'}) : this.setState({firstNameRequired : 'dispNone'})
        this.state.lastname === "" ? this.setState({lastNameRequired : 'dispBlock'}) : this.setState({lastNameRequired : 'dispNone'})
        this.state.email === "" ? this.setState({emailRequired : 'dispBlock'}) : this.setState({emailRequired : 'dispNone'})
        this.state.regpassword === "" ? this.setState({regPasswordRequired : 'dispBlock'}) : this.setState({regPasswordRequired : 'dispNone'})
        this.state.contactno === "" ? this.setState({contactNoRequired : 'dispBlock'}) : this.setState({contactNoRequired : 'dispNone'})
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username : e.target.value})
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({password : e.target.value})
    }

    inputFirstNameChangeHandler = (e) => {
        this.setState({firstname : e.target.value})
    }

    inputLastNameChangeHandler = (e) => {
        this.setState({lastname : e.target.value})
    }

    inputEmailChangeHandler = (e) => {
        this.setState({email : e.target.value})
    }

    inputRegPasswordChangeHandler = (e) => {
        this.setState({regpassword : e.target.value})
    }

    inputContactNoChangeHandler = (e) => {
        this.setState({contactno : e.target.value})
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
                            <Input id="userPassword" type="password" username={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstName"> First Name </InputLabel>
                            <Input id="firstName" type="text" username={this.state.firstname} onChange={this.inputFirstNameChangeHandler}/>
                            <FormHelperText className={this.state.firstNameRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="lastname"> Last Name </InputLabel>
                            <Input id="lastname" type="text" username={this.state.lastname} onChange={this.inputLastNameChangeHandler}/>
                            <FormHelperText className={this.state.lastNameRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="email"> Email </InputLabel>
                            <Input id="email" type="text" username={this.state.email} onChange={this.inputEmailChangeHandler}/>
                            <FormHelperText className={this.state.emailRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="userRegPassword"> Password </InputLabel>
                            <Input id="userRegPassword" type="password" username={this.state.regpassword} onChange={this.inputRegPasswordChangeHandler}/>
                            <FormHelperText className={this.state.regPasswordRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="contactno"> Contact No. </InputLabel>
                            <Input id="contactno" type="text" username={this.state.contactno} onChange={this.inputContactNoChangeHandler}/>
                            <FormHelperText className={this.state.contactNoRequired}><span className="red">Required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>}
                </Modal>
            </div>
        )
    }
}

export default Header;