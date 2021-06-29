class AppointmentService {
  constructor() {
    this.appointments = [
      { id: 1, name: 'Arthur', whenToDo: '01/01/2030', done: true },
      { id: 1, name: 'André', whenToDo: '10/02/2030', done: false },
      { id: 1, name: 'Celio', whenToDo: '02/03/2030', done: false },
      { id: 1, name: 'João', whenToDo: '17/07/2020', done: false },
    ];
  }

  list() {
    return this.appointments;
  }
}
export default new AppointmentService();