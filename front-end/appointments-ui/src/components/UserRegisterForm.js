import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import UserService from '../api/UserService';

export default class UserRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
        id: 0,
      name: '',
      email: '',
      password: ''
      
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.onInputChangeHandler(event);
    UserService.save(this.state);
    toast.success('Usuário salvo com sucesso', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
  

  onInputChangeHandler( event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState(({ [field]: value}));
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Usuário</h1>
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
          <div className="form-group">
            <label htmlFor="name">E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={this.onInputChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Digite sua senha"
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
