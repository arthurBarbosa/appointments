package com.abcode.appointments.services;

import com.abcode.appointments.config.UserSystem;
import com.abcode.appointments.dto.RoleDTO;
import com.abcode.appointments.dto.UserRequestDTO;
import com.abcode.appointments.dto.UserResponseDTO;
import com.abcode.appointments.entities.User;
import com.abcode.appointments.repositories.RoleRepository;
import com.abcode.appointments.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @Transactional
    public UserResponseDTO insert(UserRequestDTO dto) {
        var entity = new User();
        copyDtoToEntity(dto, entity);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        var userSave = userRepository.save(entity);
        return new UserResponseDTO(entity);
    }

    private void copyDtoToEntity(UserRequestDTO dto, User entity) {
        entity.setId(dto.getId());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setName(dto.getName());

        entity.getRoles().clear();
        for (RoleDTO roleDTO : dto.getRoles()) {
            var role = roleRepository.getOne(roleDTO.getId());
            entity.getRoles().add(role);
        }
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            logger.error("User not found: " + username);
            throw new UsernameNotFoundException("Email not found");
        }
        logger.info("User found: " + username);
        return user;
    }

    private Collection<? extends GrantedAuthority> getRoles(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return authorities;
    }

    public Collection<UserResponseDTO> findAll() {
        return userRepository.findAll().stream().map(x -> UserResponseDTO.builder()
                .id(x.getId())
                .name(x.getName())
                .email(x.getEmail())
                .build()).collect(Collectors.toList());
    }
}
