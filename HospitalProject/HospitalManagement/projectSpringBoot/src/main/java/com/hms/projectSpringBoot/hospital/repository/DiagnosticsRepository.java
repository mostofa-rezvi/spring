package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Diagnostics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiagnosticsRepository extends JpaRepository<Diagnostics, Long> {
    List<Diagnostics> findByPatientId(Long patientId);  // Find diagnostics by patient ID
    List<Diagnostics> findByDoctorId(Long doctorId);    // Find diagnostics by doctor ID
}