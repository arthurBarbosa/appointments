package com.abcode.appointments.resources;

import com.abcode.appointments.dto.GenericDTO;
import com.abcode.appointments.services.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;

public abstract class GenericResource<E, D extends GenericDTO, R extends JpaRepository<E, Long>, S extends GenericService<E, D, R>>  {

    @Autowired
    private S service;

    @GetMapping
    public ResponseEntity<List<D>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @PostMapping
    public ResponseEntity<D> insert(@RequestBody @Valid D dto) {
        var newDto = service.insert(dto);
        var uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }
}
