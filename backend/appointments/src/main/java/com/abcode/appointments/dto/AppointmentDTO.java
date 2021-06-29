package com.abcode.appointments.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO implements GenericDTO {

    private Long id;

    private LocalDateTime date;

    private DoctorDTO doctor;

    private CustomerDTO customer;
}
