import React, { Component } from 'react';

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
    alert('subit');
  }

  onInputChangeHandler(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      customer: { ...prevState.customer, [field]: value },
    }));
    console.log(this.state.customer);
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
          <button type="submit" className="btn btn-primary">
            Cancelar
          </button>
        </form>
      </div>
    );
  }
}
