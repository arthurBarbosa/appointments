package com.abcode.appointments.services;

import com.abcode.appointments.dto.DoctorDTO;
import com.abcode.appointments.entities.Doctor;
import com.abcode.appointments.repositories.DoctorRepository;
import com.abcode.appointments.services.exceptions.DuplicateRegisterException;

public class DoctorService extends GenericService<Doctor, DoctorDTO, DoctorRepository> {
    @Override
    protected Doctor copyDtoToEntity(DoctorDTO dto) {
        return Doctor.builder().id(dto.getId()).name(dto.getName()).build();
    }

    @Override
    protected DoctorDTO copyEntityToDto(Doctor entity) {
        return DoctorDTO.builder().id(entity.getId()).name(entity.getName()).build();
    }

    @Override
    protected void valid(DoctorDTO dto) {
        if (!repository.findByName(dto.getName()).isEmpty()) throw new DuplicateRegisterException("Médico já cadastrado");
    }
}
