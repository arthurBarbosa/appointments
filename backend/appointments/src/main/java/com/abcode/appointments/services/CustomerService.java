package com.abcode.appointments.services;

import com.abcode.appointments.dto.CustomerDTO;
import com.abcode.appointments.entities.Customer;
import com.abcode.appointments.repositories.CustomerRepository;
import com.abcode.appointments.services.exceptions.DuplicateRegisterException;
import org.springframework.stereotype.Service;

@Service
public class CustomerService extends GenericService<Customer, CustomerDTO, CustomerRepository>{
    @Override
    protected Customer copyDtoToEntity(CustomerDTO dto) {
        return Customer.builder().id(dto.getId()).name(dto.getName()).build();
    }

    @Override
    protected CustomerDTO copyEntityToDto(Customer entity) {
        return CustomerDTO.builder().id(entity.getId()).name(entity.getName()).build();
    }

    @Override
    protected void valid(CustomerDTO dto) {
        if(repository.findByName(dto.getName()).isEmpty()) throw new DuplicateRegisterException("Cliente já cadastrado");
    }
}
