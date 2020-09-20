import React, { Component } from 'react';
import Login from './components/login';
import Register from './components/register'
import Forget_password from './components/forgetpassword';
import manage from './components/Manage/manage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AgentDashboard from './components/agentDashboard/Agentdashboard'
import TicketHistory from './components/Manage/ticketHistory'
import LotteryT from './components/lotteryT'
import PrintTicket from './components/Common/printTicket';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path ="/forgetpassword" component={Forget_password}/>
                <Route path ="/admin" component={manage}/>
                <Route path ="/agentdashboard" component={AgentDashboard}/>
                <Route path ="/tickethistory" component={TicketHistory}/>
                <Route path ="/lotteryticket" component={LotteryT}/>
                <Route path ="/printticket" component={PrintTicket}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
