import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerService from '../api/CustomerService';
import DoctorService from '../api/DoctorService';
import Alert from './Alert';

export default class DoctorListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      editId: 0,
      loading: false,
      alert: null,
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
  }

  componentDidMount() {
    this.listDoctors();
  }

  listDoctors() {
    this.setState({ loading: true });
    DoctorService.list(
      (doctors) => this.setState({ doctors: doctors, loading: false }),
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
    if (window.confirm('Deseja excluir este médico')) {
      CustomerService.delete(id);
      this.listDoctors();
      toast.success('Médico excluído!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }
  onStatusChangeHandler(doctor) {
    // appointment.done = !appointment.done;
    DoctorService.save(doctor);
    this.listDoctors();
  }

  render() {
    return (
      <>
        <h1>Lista de Médicos</h1>
        {this.state.alert != null ? <Alert message={this.state.alert} /> : ''}
        <table className="table table-striped">
          <TableHeader />
          {this.state.doctors.length > 0 ? (
            <TableBody
              doctors={this.state.doctors}
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
      {props.doctors.map((doctor) => (
        <tr key={doctor.id}>
          <td>{doctor.id}</td>
          <td>{doctor.name}</td>
          <td>
            <input type="button" className="btn btn-primary" value="Editar" />
            &nbsp;
            <input
              type="button"
              className="btn btn-danger"
              value="Excluir"
              onClick={() => props.onDelete(doctor.id)}
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
        <td colSpan="4">Sem médicos cadastrada no momento!</td>
      </tr>
    </tbody>
  );
};
