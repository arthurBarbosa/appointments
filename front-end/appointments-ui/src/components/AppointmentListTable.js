import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AppointmentService from '../api/AppointmentService';
import 'react-toastify/dist/ReactToastify.css';

export default class AppointmentListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
  }

  componentDidMount() {
    this.listAppointments();
  }

  listAppointments() {
    this.setState({ appointments: AppointmentService.list() });
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
      <tr className="thead-dark">
        <th scope="col">Status</th>
        <th scope="col">Nome</th>
        <th scope="col">Data</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tbody>
      {props.appointments.map((appointment) => (
        <tr key={appointment.id}>
          <td>
            <input
              type="checkbox"
              checked={appointment.done}
              onChange={() => props.onStatusChange(appointment)}
            />
          </td>
          <td>{appointment.name}</td>
          <td>{appointment.whenToDo}</td>
          <td>
            <input type="button" className="btn btn-primary" value="Editar" />
            &nbsp;
            <input
              type="button"
              className="btn btn-danger"
              value="Excluir"
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
