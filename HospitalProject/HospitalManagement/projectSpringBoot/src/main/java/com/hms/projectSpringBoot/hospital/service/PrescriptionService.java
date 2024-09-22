package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    // Get all prescriptions
    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    // Get prescription by ID
    public Optional<Prescription> getPrescriptionById(Long id) {
        return prescriptionRepository.findById(id);
    }

    // Save or update a prescription
    public Prescription saveOrUpdatePrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    // Delete a prescription by ID
    public void deletePrescription(Long id) {
        prescriptionRepository.deleteById(id);
    }

    // Get prescriptions by doctor ID
    public List<Prescription> getPrescriptionsByDoctor(Long doctorId) {
        return prescriptionRepository.findByDoctor_Id(doctorId);
    }

    // Get prescriptions by patient ID
    public List<Prescription> getPrescriptionsByPatient(Long patientId) {
        return prescriptionRepository.findByPatient_Id(patientId);
    }

    // Get prescriptions by date
    public List<Prescription> getPrescriptionsByDate(java.util.Date prescriptionDate) {
        return prescriptionRepository.findByPrescriptionDate(prescriptionDate);
    }
}
