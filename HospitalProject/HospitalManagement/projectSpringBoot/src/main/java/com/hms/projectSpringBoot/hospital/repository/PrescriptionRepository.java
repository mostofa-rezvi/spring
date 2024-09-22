package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

    // Find prescriptions by doctor ID
    List<Prescription> findByDoctor_Id(Long doctorId);

    // Find prescriptions by patient ID
    List<Prescription> findByPatient_Id(Long patientId);

    // Find prescriptions by date
    List<Prescription> findByPrescriptionDate(java.util.Date prescriptionDate);
}
