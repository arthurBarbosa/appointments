package com.abcode.appointments.repositories;

import com.abcode.appointments.entities.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDoctorIdAndDateBetween(Long idDoctor, LocalDateTime startDate, LocalDateTime endDate);
}
