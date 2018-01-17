import React from "react";
import { Redirect } from "react-router-dom";
import sharedStyles from '../../shared-styles.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      redirectToReferrer: false, 
      login: {

      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {}

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    let login = this.state.login;
    login[name] = value;

    this.setState({
      login: login
    }, () => { console.log(this.state.login)});
    
  }

  login(e) {
    e.preventDefault();
    const self = this;
    let login = this.state.login;
    if(!login.email || ! login.password){
      return; 
    }
    this.props.authenticator.authenticate(login.email, login.password, () => {
      console.log(self);
      self.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <MuiThemeProvider>
        <p>You must log in first</p>
        <form onSubmit={this.login}>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          type="text"
          onChange={this.handleChange} 
          name="email"
        />
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          onChange={this.handleChange} 
          name="password"
        />
        
        <br />
        
        <RaisedButton  primary={true} onClick={this.login} label="Login" />
        </form>
      </MuiThemeProvider>
    )
  
  }
}
