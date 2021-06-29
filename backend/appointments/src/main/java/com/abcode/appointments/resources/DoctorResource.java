package com.abcode.appointments.resources;

import com.abcode.appointments.dto.DoctorDTO;
import com.abcode.appointments.entities.Doctor;
import com.abcode.appointments.repositories.DoctorRepository;
import com.abcode.appointments.services.DoctorService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/doctor")
public class DoctorResource extends GenericResource<Doctor, DoctorDTO, DoctorRepository, DoctorService>{
}
