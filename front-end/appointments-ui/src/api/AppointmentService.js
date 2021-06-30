import React from 'react'
import axios from "axios";
import { API_ENDPOINT } from "../constants";

class AppointmentService {
  constructor() {
    // this.appointments = [
    //   { id: 1, name: 'Arthur', whenToDo: '01/01/2030', done: true },
    //   { id: 1, name: 'André', whenToDo: '10/02/2030', done: false },
    //   { id: 1, name: 'Celio', whenToDo: '02/03/2030', done: false },
    //   { id: 1, name: 'João', whenToDo: '17/07/2020', done: false },
    // ];

    this.state = {
      appointments: []
    }
  }

  async list() {
    const response = await axios.get(`${API_ENDPOINT}/appointment`)
    .then((response) => {
        return response.data;
    })
    return response;
  }

  delete(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id,
    );
  }

  save(appointment) {
    this.appointments.map((a) =>
      appointment.id !== appointment.id ? a : appointment,
    );
    console.log(appointment);
  }
}
export default new AppointmentService();
