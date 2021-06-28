package com.abcode.appointments.dto;

import com.abcode.appointments.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private Long id;
    private String email;

    public UserResponseDTO(User entity) {
        this.id = entity.getId();
        this.email = entity.getEmail();
    }
}
