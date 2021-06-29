import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppointmentListTable from './components/AppointmentListTable';
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
          <AppointmentListTable />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
