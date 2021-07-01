import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AppointmentService from '../api/AppointmentService';
import Moment from 'react-moment';
import 'react-toastify/dist/ReactToastify.css';

export default class AppointmentListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
      loading: false,
      alert: null,
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
  }

  componentDidMount() {
    this.listAppointments();
  }

  async listAppointments() {
    this.setState({ appointments: await AppointmentService.list() });
  }

  onDeleteHandler(id) {
    if (window.confirm('Deseja excluir esta consulta')) {
      AppointmentService.delete(id);
      this.listAppointments();
      toast.success('Consulta excluída!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }
  onStatusChangeHandler(appointment) {
    appointment.done = !appointment.done;
    AppointmentService.save(appointment);
    this.listAppointments();
  }

  render() {
    return (
      <>
        <table className="table table-striped">
          <TableHeader />
          {this.state.appointments.length > 0 ? (
            <TableBody
              appointments={this.state.appointments}
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
      <h1>Lista de Consultas</h1>
      <tr className="thead-dark">
        <th scope="col">Data</th>
        <th scope="col">Médico</th>
        <th scope="col">Cliente</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tbody>
      {props.appointments.map((appointment) => (
        <tr key={appointment.doctor.id}>
          <td><Moment format="DD/MM/YYYY">{appointment.date}</Moment></td>
          <td>{appointment.doctor.name}</td>
          <td>{appointment.customer.name}</td>
          <td>
            <input
              type="button"
              className="btn btn-primary"
              value="Editar"
              disabled
            />
            &nbsp;
            <input
              type="button"
              className="btn btn-danger"
              value="Excluir"
              disabled
              onClick={() => props.onDelete(appointment.id)}
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
