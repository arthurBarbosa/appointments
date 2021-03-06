package com.abcode.appointments.resources.exceptions;

import com.abcode.appointments.services.exceptions.DuplicateRegisterException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ErrorHandlerExcption extends ResponseEntityExceptionHandler {

    public static final String MSG_ERRO_GENERICA_USUARIO_FINAL = "Ocorreu um erro interno no sistema. " +
            "Tente novamente, se o problema persistir, entre em contato com o administrador.";

    private final MessageSource messageSource;

    public ErrorHandlerExcption(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    private Error.ErrorBuilder createErrorBuilder(HttpStatus status, ExceptionEnum exception, String message) {
        return Error.builder().timestamp(OffsetDateTime.now()).status(status.value()).type(exception.getUri())
                .title(exception.getDescription()).msg(message);
    }

    @Override
    protected ResponseEntity<Object> handleBindException(BindException ex, HttpHeaders headers, HttpStatus status,
                                                         WebRequest request) {
        return getObjectResponseEntity(ex, headers, status, request, ex.getBindingResult());
    }

    private ResponseEntity<Object> getObjectResponseEntity(Exception ex, HttpHeaders headers, HttpStatus status,
                                                           WebRequest request, BindingResult bindingResult) {
        ExceptionEnum errorType = ExceptionEnum.INVALID_DATA;
        String detail = "Um ou mais campos est??o inv??lidos. Fa??a o preenchimento correto e tente novamente.";
        List<Error.Field> fieldList = bindingResult.getAllErrors().stream()
                .map(fieldError -> {
                    String msg = messageSource.getMessage(fieldError, LocaleContextHolder.getLocale());
                    String name = fieldError.getObjectName();
                    if (fieldError instanceof FieldError) {
                        name = ((FieldError) fieldError).getField();
                    }
                    return Error.Field.builder().name(name).msg(msg).build();
                }).collect(Collectors.toList());
        Error errors = createErrorBuilder(status, errorType, detail).msg(detail).fields(fieldList).build();
        return handleExceptionInternal(ex, errors, headers, status, request);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handleException(ConstraintViolationException ex, WebRequest request) {
        HttpStatus status = HttpStatus.NOT_ACCEPTABLE;
        ExceptionEnum errorType = ExceptionEnum.ERROR_CONSTRAINT;
        String msg = ex.getMessage();
        Error errors = createErrorBuilder(status, errorType, msg).build();
        return handleExceptionInternal(ex, errors, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(DuplicateRegisterException.class)
    public ResponseEntity<Object> handleException(DuplicateRegisterException ex, WebRequest request) {
        HttpStatus status = HttpStatus.NOT_ACCEPTABLE;
        ExceptionEnum errorType = ExceptionEnum.REGISTER_DUPLICATE;
        String msg = ex.getMessage();
        Error errors = createErrorBuilder(status, errorType, msg).build();
        return handleExceptionInternal(ex, errors, new HttpHeaders(), status, request);
    }
}
