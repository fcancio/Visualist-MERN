import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import GratitudePage from '../GratitudePage/GratitudePage';

class App extends Component {
  state = {
    user: userService.getUser(),
    gratitude: [],
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('cwrp', nextProps)
  }


  handleLogout = () => {
    userService.logOut();
    this.setState({ user:null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  updateGratitude = (newGrat) => {
    console.log('app update gratitude', newGrat)
    this.setState({
      gratitude: [newGrat, ...this.state.gratitude]
    })
  }


  render() {
    return (
      <div>
        <header className="App-header">V I S U A L I S T
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <h2>TODAY IS {new Date().toLocaleDateString()}</h2>
        <Switch>
          <Route exact path='/' render={({ history }) =>
            <LandingPage
              history={history}
              user={this.state.user}
              gratitude={this.state.gratitude}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} 
            />
          }/>
          <Route exact path='/gratitude' render={({ history }) => 
            <GratitudePage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} 
              user={this.state.user}
              updateGratitude={this.updateGratitude}
            />
          }/>
          </Switch>
      </div>
    )
  }
}



export default App;
