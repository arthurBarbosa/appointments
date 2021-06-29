import React, { Component } from 'react';

export default class AppointmentListTable extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <td>Status</td>
        <td>Nome</td>
        <td>Data</td>
        <td>Ações</td>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};
