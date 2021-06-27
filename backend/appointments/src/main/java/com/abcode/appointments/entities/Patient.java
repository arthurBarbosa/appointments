package com.abcode.appointments.entities;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = true)
@Entity
@Table(name = "patient")
public class Patient extends User {

    @NotBlank(message = "O E-mail não pode ser vazio")
    @Email(message = "O e-mail é inválido")
    @Size(max = 60, message = "O nome é muito grande")
    private String name;

    @NotBlank(message = "O E-mail não pode ser vazio")
    private String phone;
}
