package com.abcode.appointments.services;

import com.abcode.appointments.dto.DoctorDTO;
import com.abcode.appointments.entities.Doctor;
import com.abcode.appointments.repositories.DoctorRepository;

public class DoctorService extends GenericService<Doctor, DoctorDTO, DoctorRepository> {
    @Override
    protected Doctor copyDtoToEntity(DoctorDTO dto) {
        return Doctor.builder().id(dto.getId()).name(dto.getName()).build();
    }

    @Override
    protected DoctorDTO copyEntityToDto(Doctor entity) {
        return null;
    }

    @Override
    protected void valid(DoctorDTO dto) {

    }
}
