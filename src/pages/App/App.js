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
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      gratitude: [],
    }
    console.log('App.js: constructor')
  }

  
   async componentDidMount() {
   if (this.state.user !== null) {
    console.log('App: compondentDidMount', Date.now())
    console.log('AHHH I AM THE USER : ',this.state.user)
   const response = await getUserGrat(this.state.user._id)
   await console.log('AHHH LINE 26 RESPONSE ::: ', response)
   this.setState({
     gratitude : response.gratitude
   })Z
   }
      //set the gratitude here when this component mounts 
    }
  
    componentDidUpdate() {
      console.log('App: componentDidUpdate')
    }

  handleLogout = () => {
    userService.logOut();
    this.setState({ user:null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  updateGratitude = (newGrat) => {
    console.log('newGrat in updateGratitude() from App.js', newGrat)
    this.setState({
      gratitude: [newGrat, ...this.state.gratitude]
    })
    console.log('state gratitude array in App.js updateGratitude()', this.state.gratitude)
  }

  componentWillUnmount() {
    console.log('App: componentWillUnmount')
  }


  render() {
    console.log('App.js: render')
    return (
      <div>
        <header className="App-header">V I S U A L I S T
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        
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
              gratitude={this.state.gratitude}
              updateGratitude={this.updateGratitude}
            />
          }/>
          </Switch>
      </div>
    )
  }
}

export default App;

// this should be extracted to a service but this is what we will use to set up our state
/**
 * we need to get a specific user so that we can get all of their items
 * we can then filter those items into seperate parts of state for each page i.e. gratitude is a piece of state
 */
async function getUserGrat(id) {
  const a = await fetch(`/api/gratitude/${id}`)
  const ajson = await a.json()
  await console.log(ajson)
  return ajson
}
