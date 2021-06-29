package com.abcode.appointments.services;

import com.abcode.appointments.dto.GenericDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class GenericService<E,D extends GenericDTO,R extends JpaRepository<E, Long>>  {
}
