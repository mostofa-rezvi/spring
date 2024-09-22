package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByRequestedById(Long userId);  // Custom method to find appointments by user ID
    List<Appointment> findByDoctorId(Long doctorId);  // Custom method to find appointments by doctor ID
}
