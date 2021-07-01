import React, { Component } from 'react';
import AppointmentService from '../api/AppointmentService';
import CustomerService from '../api/CustomerService';
import DoctorService from '../api/DoctorService';

export default class AppointmentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      doctor: {
        id: 0,
        name: '',
      },
      customer: {
        id: 0,
        name: '',
      },
      customers: [],
      selectedCustomer: '',
      doctors: [],
      selectedDoctor: '',
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.listDoctors();
    this.listCustomer();
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.onInputChangeHandler(event);
    AppointmentService.save(this.state);
  }

  async listCustomer() {
    this.setState({ customers: await CustomerService.listCustomer() });
  }

  async listDoctors() {
    this.setState({ doctors: await DoctorService.list() });
  }

  onInputChangeHandler(event) {
    this.setState(
      { date: event.target.value },
      { doctor: event.target.value },
      { customer: event.target.value },
    );
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <h1>Cadastro de Consulta</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={this.onInputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="customer">Cliente</label>
            <select
              className="form-control"
              name="customer"
              onChange={(e) => {
                this.setState({ selectedCustomer: e.target.value });
                console.log(this.state.selectedCustomer);
              }}
            >
              {this.state.customers.map((customer) => {
                return (
                  <option value={customer.name} key={customer.id}>
                    {customer.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Médico</label>
            <select
              className="form-control"
              name="doctor"
              onChange={(e) => {
                this.setState({ selectedDoctor: e.target.value });
                console.log(this.state.selectedDoctor);
              }}
            >
              {this.state.doctors.map((doctor) => {
                return (
                  <option value={doctor.name} key={doctor.id}>
                    {doctor.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
          &nbsp;&nbsp;
          <button type="reset" className="btn btn-primary">
            Cancelar
          </button>
        </form>
      </div>
    );
  }
}
