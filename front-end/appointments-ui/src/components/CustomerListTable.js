import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerService from '../api/CustomerService';
import Alert from './Alert';

export default class CustomerListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      editId: 0,
      loading: false,
      alert: null,
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
  }

  componentDidMount() {
    this.listCustomers();
  }

  listCustomers() {
    this.setState({ loading: true });
    CustomerService.list(
      (customers) => this.setState({ customers: customers, loading: false }),
      (error) => this.setErrorState(error),
    );
  }

  setErrorState(error) {
    this.setState({
      alert: `Erro na requisição: ${error.message}`,
      loading: false,
    });
  }

  onDeleteHandler(id) {
    if (window.confirm('Deseja excluir esta consulta')) {
      CustomerService.delete(id);
      this.listCustomers();
      toast.success('Consulta excluída!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }
  onStatusChangeHandler(customer) {
    // appointment.done = !appointment.done;
    CustomerService.save(customer);
    this.listCustomers();
  }

  render() {
    return (
      <>
        <h1>Lista de Clientes</h1>
        {this.state.alert != null ? <Alert message={this.state.alert} /> : ''}
        <table className="table table-striped">
          <TableHeader />
          {this.state.customers.length > 0 ? (
            <TableBody
              customers={this.state.customers}
              onDelete={this.onDeleteHandler}
              onStatusChange={this.onStatusChangeHandler}
            />
          ) : (
            <EmptyTableBody />
          )}
        </table>
        <ToastContainer autoClose={1500} />
      </>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr className="thead-dark">
        <th scope="col">Id</th>
        <th scope="col">Nome</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tbody>
      {props.customers.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>
            <input type="button" className="btn btn-primary" value="Editar" />
            &nbsp;
            <input
              type="button"
              className="btn btn-danger"
              value="Excluir"
              onClick={() => props.onDelete(customer.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const EmptyTableBody = (props) => {
  return (
    <tbody>
      <tr>
        <td colSpan="4">Sem consultas cadastrada no momento!</td>
      </tr>
    </tbody>
  );
};
