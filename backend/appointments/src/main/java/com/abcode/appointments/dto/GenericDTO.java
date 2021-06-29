package com.abcode.appointments.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public interface GenericDTO {

    Long getId();
}
