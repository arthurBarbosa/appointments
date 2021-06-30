class AppointmentService {
  constructor() {
    this.customers = [
      { id: 1, name: 'Arthur' },
      { id: 2, name: 'André' },
      { id: 3, name: 'Celio' },
      { id: 4, name: 'João' },
    ];
  }

  list() {
    return this.customers;
  }

  delete(id) {
    this.customers = this.customers.filter(
      (appointment) => appointment.id !== id,
    );
  }

  save(appointment) {
    this.customers.map((a) => (customer.id !== customer.id ? a : customer));
    console.log(customer);
  }
}
export default new CustomerService();
