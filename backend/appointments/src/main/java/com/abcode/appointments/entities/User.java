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
@MappedSuperclass
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O E-mail não pode ser vazio")
    @Email(message = "O e-mail é inválido")
    @Size(max = 60, message = "O E-mail é muito grande")
    private String email;

    @NotBlank(message = "A senha não pode ser vazia")
    @Size(max = 80, message = "A senha é muito grande")
    private String password;
}
