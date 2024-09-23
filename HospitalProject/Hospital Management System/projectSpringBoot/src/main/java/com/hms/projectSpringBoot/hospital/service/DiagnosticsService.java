package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Diagnostics;
import com.hms.projectSpringBoot.hospital.repository.DiagnosticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiagnosticsService {

    @Autowired
    private DiagnosticsRepository diagnosticsRepository;

    public List<Diagnostics> getAllDiagnostics() {
        return diagnosticsRepository.findAll();
    }

    public Optional<Diagnostics> getDiagnosticsById(Long id) {
        return diagnosticsRepository.findById(id);
    }

    public Diagnostics createDiagnostics(Diagnostics diagnostics) {
        return diagnosticsRepository.save(diagnostics);
    }

    public Diagnostics updateDiagnostics(Long id, Diagnostics updatedDiagnostics) {
        return diagnosticsRepository.findById(id).map(diagnostics -> {
            diagnostics.setTestDate(updatedDiagnostics.getTestDate());
            diagnostics.setTestResult(updatedDiagnostics.getTestResult());
            diagnostics.setPrice(updatedDiagnostics.getPrice());
            diagnostics.setCreatedAt(updatedDiagnostics.getCreatedAt());
            diagnostics.setUpdatedAt(updatedDiagnostics.getUpdatedAt());
            diagnostics.setDoctor(updatedDiagnostics.getDoctor());
            diagnostics.setPatient(updatedDiagnostics.getPatient());
            return diagnosticsRepository.save(diagnostics);
        }).orElseThrow(() -> new RuntimeException("Diagnostics not found"));
    }

    public void deleteDiagnostics(Long id) {
        diagnosticsRepository.deleteById(id);
    }

    public List<Diagnostics> getDiagnosticsByPatientId(Long patientId) {
        return diagnosticsRepository.findByPatientId(patientId);
    }

    public List<Diagnostics> getDiagnosticsByDoctorId(Long doctorId) {
        return diagnosticsRepository.findByDoctorId(doctorId);
    }
}
