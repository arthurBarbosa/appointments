package com.abcode.appointments.resources;


import com.abcode.appointments.dto.AppointmentDTO;
import com.abcode.appointments.entities.Appointment;
import com.abcode.appointments.repositories.AppointmentRepository;
import com.abcode.appointments.services.AppointmentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/appointment")
public class AppointmentResource extends GenericResource<Appointment, AppointmentDTO, AppointmentRepository, AppointmentService> {
}
