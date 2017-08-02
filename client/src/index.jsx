import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import DebateFloor from './components/debate/DebateFloor.jsx';
import Login from './components/login/login.jsx';
import SignUp from './components/signup/signup.jsx';
import Chatview from './components/chatview/chatview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Nav />
        <h1>TEST APP main routing is completed</h1>
        <Main />
        <DebateFloor />
        <div>Chat Goes Here</div>

        <h1>TEST APP</h1>
        <Chatview />

        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={Main}/>
          <Main />
          <DebateFloor />
          <div>Chat Goes Here</div>
          
          <div>Sample Login</div>
          <Login />
          
          <div>Sample Sign up</div>
          <SignUp />
                

          <h1>TEST APP</h1>
          <Chatview />
        </Switch>

      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));
