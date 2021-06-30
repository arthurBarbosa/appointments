import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppointmentListTable from './components/AppointmentListTable';
import CustomerForm from './components/CustomerForm';
import Login from './components/Login';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="container" style={{ marginTop: 20 }}>
            <Switch>
              <Route exact path="/form-client" component={CustomerForm} />
              <Route exact path="/login" component={Login} />
              <Route path="/" component={AppointmentListTable} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
