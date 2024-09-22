package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin(origins = "*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    // Get all prescriptions
    @GetMapping
    public ResponseEntity<List<Prescription>> getAllPrescriptions() {
        List<Prescription> prescriptions = prescriptionService.getAllPrescriptions();
        return ResponseEntity.ok(prescriptions);
    }

    // Get prescription by ID
    @GetMapping("/{id}")
    public ResponseEntity<Prescription> getPrescriptionById(@PathVariable Long id) {
        Optional<Prescription> prescription = prescriptionService.getPrescriptionById(id);
        return prescription.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Create or update a prescription
    @PostMapping
    public ResponseEntity<Prescription> createOrUpdatePrescription(@RequestBody Prescription prescription) {
        Prescription savedPrescription = prescriptionService.saveOrUpdatePrescription(prescription);
        return ResponseEntity.ok(savedPrescription);
    }

    // Delete a prescription by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrescription(@PathVariable Long id) {
        prescriptionService.deletePrescription(id);
        return ResponseEntity.noContent().build();
    }

    // Get prescriptions by doctor ID
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Prescription>> getPrescriptionsByDoctor(@PathVariable Long doctorId) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByDoctor(doctorId);
        return ResponseEntity.ok(prescriptions);
    }

    // Get prescriptions by patient ID
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Prescription>> getPrescriptionsByPatient(@PathVariable Long patientId) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByPatient(patientId);
        return ResponseEntity.ok(prescriptions);
    }

    // Get prescriptions by date
    @GetMapping("/date")
    public ResponseEntity<List<Prescription>> getPrescriptionsByDate(@RequestParam java.util.Date date) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByDate(date);
        return ResponseEntity.ok(prescriptions);
    }
}
