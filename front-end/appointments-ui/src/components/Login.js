import React, { Component } from 'react';
import { Redirect } from 'react-router';
import AuthService from '../api/AuthService';
import Alert from './Alert';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      processing: '',
      alert: null,
      loggedIn: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleLoginResponse = this.handleLoginResponse.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    AuthService.login(
      this.state.username,
      this.state.password,
      this.handleLoginResponse,
    );
  }

  handleLoginResponse(success) {
    if (success) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ alert: 'O login não pode ser realizado' });
    }
  }

  handleInputChanged(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/appointments" />;
    }
    return (
      <div>
        <h1>Login</h1>

        {this.state.alert !== null ? <Alert message={this.state.alert} /> : ''}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleInputChanged}
              value={this.state.username}
              name="username"
              placeholder="Digite o usuário"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleInputChanged}
              value={this.state.password}
              name="password"
              placeholder="Digite a senha"
            />
          </div>
          <button className="btn btn-primary" disabled={this.state.processing}>
            Login
          </button>
          <p>Não possui usuário <a href="user-form">clique aqui.</a> </p>
        </form>
      </div>
    );
  }
}
