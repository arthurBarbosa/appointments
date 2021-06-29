package com.abcode.appointments.resources;

import com.abcode.appointments.dto.CustomerDTO;
import com.abcode.appointments.entities.Customer;
import com.abcode.appointments.repositories.CustomerRepository;
import com.abcode.appointments.services.CustomerService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerResource extends GenericResource<Customer, CustomerDTO, CustomerRepository, CustomerService>{
}
