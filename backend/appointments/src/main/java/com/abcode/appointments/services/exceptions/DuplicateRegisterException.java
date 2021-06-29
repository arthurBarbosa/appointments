package com.abcode.appointments.services.exceptions;

public class DuplicateRegisterException extends RuntimeException {

    public DuplicateRegisterException(String message) {
        super(message);
    }
}
