package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin(origins = "*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping
    public ResponseEntity<List<Prescription>> getAllPrescriptions() {
        List<Prescription> prescriptions = prescriptionService.getAllPrescriptions();
        return ResponseEntity.ok(prescriptions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescription> getPrescriptionById(@PathVariable Long id) {
        Optional<Prescription> prescription = prescriptionService.getPrescriptionById(id);
        return prescription.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

//    @PostMapping
//    public ResponseEntity<Prescription> createOrUpdatePrescription(@RequestBody Prescription prescription) {
//        Prescription savedPrescription = prescriptionService.saveOrUpdatePrescription(prescription);
//        return ResponseEntity.ok(savedPrescription);
//    }

//    @PostMapping
//    public ResponseEntity<Prescription> createOrUpdatePrescription(@RequestBody Prescription prescription) {
//        if (prescription == null) {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//        if (prescription.getDoctor() == null) {
//            return ResponseEntity.badRequest().body(null);
//        }
//        if (prescription.getPatient() == null) {
//            return ResponseEntity.badRequest().body(null);
//        }
//
//        Prescription savedPrescription = prescriptionService.saveOrUpdatePrescription(prescription);
//        return ResponseEntity.ok(savedPrescription);
//    }


    @PostMapping
    public ResponseEntity<Prescription> createPrescription(@RequestBody Prescription prescription) {
        Prescription createdPrescription = prescriptionService.createPrescription(prescription);
        return ResponseEntity.status(201).body(createdPrescription);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prescription> updatePrescription(@PathVariable Long id, @RequestBody Prescription updatedPrescription) {
        try {
            Prescription prescription = prescriptionService.updatePrescription(id, updatedPrescription);
            return ResponseEntity.ok(prescription);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrescription(@PathVariable Long id) {
        prescriptionService.deletePrescription(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Prescription>> getPrescriptionsByDoctor(@PathVariable Long doctorId) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByDoctor(doctorId);
        return ResponseEntity.ok(prescriptions);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Prescription>> getPrescriptionsByPatient(@PathVariable Long patientId) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByPatient(patientId);
        return ResponseEntity.ok(prescriptions);
    }

    @GetMapping("/date")
    public ResponseEntity<List<Prescription>> getPrescriptionsByDate(@RequestParam Date date) {
        List<Prescription> prescriptions = prescriptionService.getPrescriptionsByDate(date);
        return ResponseEntity.ok(prescriptions);
    }
}
