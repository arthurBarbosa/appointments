import React, { Component } from 'react'

export default class AppointmentForm extends Component {
  constructor(props){
    super(props)

    this.state = {
     date: '',
     doctor: {
       id: 0,
       name: ''
     },
     customer:{
       id:0,
       name: ''
     },
     customers: [{id: 1, name: 'Leonardo'}, {id: 2, name: 'Arthur'}],
     selectedCustomer: '',
     doctors: [{id:1, name: 'Flavio'}, {id: 2, name: 'Mateus'}],
     selectedDoctor: ''
    }
    
  }

  

  onInputChangeHandler(event){
    this.setState({date: event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Cadastro de Consulta</h1>
        <form action="">
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
                this.setState({selectedCustomer: e.target.value})
                console.log(this.state.selectedCustomer)
              }}
            >
             {this.state.customers.map((customer) => {
               return (
                <option value={customer.name} key={customer.id}>{customer.name}</option>
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
                this.setState({selectedDoctor: e.target.value})
                console.log(this.state.selectedDoctor)
              }}
            >
             {this.state.doctors.map((doctor) => {
               return (
                <option value={doctor.name} key={doctor.id}>{doctor.name}</option>
               );
             })}  
            </select>
            
          </div>

        </form>

      </div>
    )
  }
}
