package com.abcode.appointments.dto;

import com.abcode.appointments.entities.Role;
import com.abcode.appointments.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequestDTO {

    private Long id;
    private String email;
    private String password;
    private String name;
    private Set<RoleDTO> roles = new HashSet<>();

    public UserRequestDTO(User entity) {
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.password = entity.getPassword();
        this.name = entity.getName();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }
}
