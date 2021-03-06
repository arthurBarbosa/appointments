import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppointmentListTable from './components/AppointmentListTable';
import CustomerListTable from './components/CustomerListTable';
import CustomerForm from './components/CustomerForm';
import Login from './components/Login';
import NavBar from './components/NavBar';
import DoctorForm from './components/DoctorForm';
import DoctorListTable from './components/DoctorListTable';
import AppointmentForm from './components/AppointmentForm';
import UserRegisterForm from './components/UserRegisterForm';

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
              <Route
                exact
                path="/form-appointment"
                component={AppointmentForm}
              />
              <Route exact path="/doctors" component={DoctorListTable} />
              <Route exact path="/appointments" component={AppointmentListTable} />
              <Route
                exact
                path="/list-customers"
                component={CustomerListTable}
              />
              <Route exact path="/doctor-form" component={DoctorForm} />
              <Route exact path="/user-form" component={UserRegisterForm} />
              <Route path="/" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
