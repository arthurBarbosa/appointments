package com.abcode.appointments.services;

import com.abcode.appointments.dto.GenericDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

public abstract class GenericService<E,D extends GenericDTO,R extends JpaRepository<E, Long>>  {

    @Autowired
    protected R repository;

    protected abstract E copyDtoToEntity(D dto);

    protected abstract D copyEntityToDto(E entity);

    protected abstract void valid(D dto);

    @Transactional
    public D insert(D dto) {
        valid(dto);
        var e = copyDtoToEntity(dto);
        var s = repository.save(e);
        return copyEntityToDto(s);
    }

    public List<D> findAll() {
        return repository.findAll().stream().map(this::copyEntityToDto).collect(Collectors.toList());
    }
}
