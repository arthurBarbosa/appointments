package com.abcode.appointments.resources.exceptions;

import lombok.Getter;

@Getter
public enum ExceptionEnum {

    INVALID_DATA("/dados-invalidos", "Dados inválidos"),
    EMAIL_DUPLICATE("/email-duplicado", "Email já existente na base de dados."),
    USER_DUPLICATE("/user-duplicado", "Usuário já existente na base de dados."),
    RESOURCE_NOT_FOUND("/recurso-nao-encontrado", "Recurso não encontrado");

    private String uri;
    private String description;

    ExceptionEnum(String path, String description) {
        this.uri = "appointment-app" + path;
        this.description = description;
    }
}
