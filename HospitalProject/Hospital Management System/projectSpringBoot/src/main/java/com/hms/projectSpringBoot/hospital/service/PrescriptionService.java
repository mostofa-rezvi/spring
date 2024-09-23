package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Optional<Prescription> getPrescriptionById(Long id) {
        return prescriptionRepository.findById(id);
    }

//    public Prescription saveOrUpdatePrescription(Prescription prescription) {
//        return prescriptionRepository.save(prescription);
//    }

//    public Prescription saveOrUpdatePrescription(Prescription prescription) {
//        if (prescription == null) {
//            throw new IllegalArgumentException("Prescription cannot be null");
//        }
//
//        if (prescription.getDoctor() == null) {
//            throw new IllegalArgumentException("Doctor must be specified");
//        }
//        if (prescription.getPatient() == null) {
//            throw new IllegalArgumentException("Patient must be specified");
//        }
//
//        return prescriptionRepository.save(prescription);
//    }

    public Prescription createPrescription(Prescription prescription) {
        prescription.setCreatedAt(LocalDateTime.now());
        return prescriptionRepository.save(prescription);
    }

    public Prescription updatePrescription(Long id, Prescription updatedPrescription) {
        return prescriptionRepository.findById(id).map(prescription -> {
            prescription.setPrescriptionDate(updatedPrescription.getPrescriptionDate());
            prescription.setNotes(updatedPrescription.getNotes());
            prescription.setDoctor(updatedPrescription.getDoctor());
            prescription.setPatient(updatedPrescription.getPatient());
            prescription.setMedicines(updatedPrescription.getMedicines());

            prescription.setUpdatedAt(LocalDateTime.now());
            return prescriptionRepository.save(prescription);
        }).orElseThrow(() -> new RuntimeException("Prescription not found"));
    }

    public void deletePrescription(Long id) {
        prescriptionRepository.deleteById(id);
    }

    public List<Prescription> getPrescriptionsByDoctor(Long doctorId) {
        return prescriptionRepository.findByDoctor_Id(doctorId);
    }

    public List<Prescription> getPrescriptionsByPatient(Long patientId) {
        return prescriptionRepository.findByPatient_Id(patientId);
    }

    public List<Prescription> getPrescriptionsByDate(Date prescriptionDate) {
        return prescriptionRepository.findByPrescriptionDate(prescriptionDate);
    }
}
