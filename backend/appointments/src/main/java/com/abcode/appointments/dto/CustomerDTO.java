package com.abcode.appointments.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO implements GenericDTO {

    private Long id;

    @NotBlank(message = "O Nome não pode ser vazio")
    @Size(max = 60, message = "O nome é muito grande")
    private String name;
}
