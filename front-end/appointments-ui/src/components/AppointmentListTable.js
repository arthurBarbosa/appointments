import React, { Component } from 'react';
import AppointmentService from '../api/AppointmentService';

export default class AppointmentListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    this.listAppointments();
  }

  listAppointments() {
    this.setState({ appointments: AppointmentService.list() });
  }

  render() {
    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody appointments={this.state.appointments} />
      </table>
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
            <input type="checkbox" checked={appointment.done} />
          </td>
          <td>{appointment.name}</td>
          <td>{appointment.whenToDo}</td>
          <td>
            <input type="button" className="btn btn-primary" value="Editar" />
            &nbsp;
            <input type="button" className="btn btn-danger" value="Excluir" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
