import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import DoctorService from '../api/DoctorService';
import Alert from './Alert';

export default class DoctorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: '',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
    this.onInputChangeHandler(event)
    DoctorService.save(this.state);
    toast.success('Médico salvo com sucesso', {
      position: toast.POSITION.BOTTOM_LEFT
    })
  }

  onInputChangeHandler(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Médicos</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Digite seu nome"
              onChange={this.onInputChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
          &nbsp;&nbsp;
          <button type="reset" className="btn btn-primary">
            Cancelar
          </button>
        </form>
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}
