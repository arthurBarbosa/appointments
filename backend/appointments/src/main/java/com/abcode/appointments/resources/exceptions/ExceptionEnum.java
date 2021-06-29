package com.abcode.appointments.resources.exceptions;

import lombok.Getter;

@Getter
public enum ExceptionEnum {

    INVALID_DATA("/dados-invalidos", "Dados inválidos"),
    ERROR_CONSTRAINT("/erros", "Aconteceu algo errado na sua solicitação,por favor revise os dados."),
    REGISTER_DUPLICATE("/registro-duplicado", "Registro já existente na base de dados."),
    RESOURCE_NOT_FOUND("/recurso-nao-encontrado", "Recurso não encontrado");

    private String uri;
    private String description;

    ExceptionEnum(String path, String description) {
        this.uri = "appointment-app" + path;
        this.description = description;
    }
}
