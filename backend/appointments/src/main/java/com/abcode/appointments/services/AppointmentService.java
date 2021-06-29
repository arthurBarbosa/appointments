package com.abcode.appointments.services;

import com.abcode.appointments.dto.AppointmentDTO;
import com.abcode.appointments.dto.CustomerDTO;
import com.abcode.appointments.dto.DoctorDTO;
import com.abcode.appointments.entities.Appointment;
import com.abcode.appointments.entities.Customer;
import com.abcode.appointments.entities.Doctor;
import com.abcode.appointments.repositories.AppointmentRepository;
import com.abcode.appointments.services.exceptions.DuplicateRegisterException;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService extends GenericService<Appointment, AppointmentDTO, AppointmentRepository>  {
    @Override
    protected Appointment copyDtoToEntity(AppointmentDTO dto) {
        return Appointment.builder()
                .id(dto.getId())
                .date(dto.getDate())
                .doctor(Doctor.builder().id(dto.getDoctor().getId()).name(dto.getDoctor().getName()).build())
                .customer(Customer.builder().id(dto.getCustomer().getId()).name(dto.getCustomer().getName()).build())
                .build();
    }

    @Override
    protected AppointmentDTO copyEntityToDto(Appointment entity) {
        return AppointmentDTO.builder()
                .id(entity.getId())
                .date(entity.getDate())
                .doctor(DoctorDTO.builder().id(entity.getDoctor().getId()).name(entity.getDoctor().getName()).build())
                .customer(CustomerDTO.builder().id(entity.getCustomer().getId()).name(entity.getCustomer().getName()).build())
                .build();
    }

    @Override
    protected void valid(AppointmentDTO dto) {
        var idDoctor = dto.getDoctor().getId();
        var date = dto.getDate();
        var endDate = date.plusMinutes(10L);
        var startDate = date.minusMinutes(10L);
        if (!repository.findByDoctorIdAndDateBetween(idDoctor, startDate, endDate).isEmpty())
            throw new DuplicateRegisterException("Médico possui agendamento para esta data e horário.");
    }
}
