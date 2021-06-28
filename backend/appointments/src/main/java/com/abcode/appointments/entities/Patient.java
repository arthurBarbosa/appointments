package com.abcode.appointments.entities;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "patient")
public class Patient implements Serializable {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O E-mail não pode ser vazio")
    @Email(message = "O e-mail é inválido")
    @Size(max = 60, message = "O nome é muito grande")
    private String name;

    @NotBlank(message = "O E-mail não pode ser vazio")
    private String phone;

    @ManyToOne
    private User user;
}
