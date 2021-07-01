import axios from 'axios';
import { API_ENDPOINT } from '../constants';

class AppointmentService {
  constructor() {
    this.state = {
      appointments: [],
    };
  }

  async list() {
    const response = await axios
      .get(`${API_ENDPOINT}/appointment`)
      .then((response) => {
        return response.data;
      });
    return response;
  }

  delete(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id,
    );
  }

  save(appointment) {
    // this.appointments.map((a) =>
    //   appointment.id !== appointment.id ? a : appointment,
    // );
    axios.post(`${API_ENDPOINT}/appointment`, appointment)
    .then((response) => {
      console.log(response.data)
    })
    console.log(appointment);
  }
}
export default new AppointmentService();
