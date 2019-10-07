import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import GratitudeList from '../../components/GratitudeList/GratitudeList'
import WellnessList from '../../components/WellnessList/WellnessList';
import MeetingsList from '../../components/MeetingList/MeetingsList';
import TaskList from '../../components/TaskList/TaskList';
import Schedule from '../../components/Schedule/Schedule';
import Mantra from '../../components/Mantra/Mantra';
import GratitudeForm from '../../components/GratitudeForm/GratitudeForm';

class App extends Component {
  state = {
    user: userService.getUser(),
    gratitude: [],
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user:null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
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
        <Switch>
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
            />
          }/>
        </Switch>
        <div className="lists-page">
          <div className="mantra"><Mantra /></div>
          <div className="list"><GratitudeList /></div>
          <div className="list"><WellnessList /></div>
          <div className="list"><MeetingsList /></div>
          <div className="list"><TaskList /></div>
          <div className="schedule"><Schedule /></div>
        </div>
      </div>
    )
  }
}

export default App;
