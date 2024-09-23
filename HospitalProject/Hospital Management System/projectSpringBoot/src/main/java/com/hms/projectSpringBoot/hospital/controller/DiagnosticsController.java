package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Diagnostics;
import com.hms.projectSpringBoot.hospital.service.DiagnosticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/diagnostics")
public class DiagnosticsController {

    @Autowired
    private DiagnosticsService diagnosticsService;

    @GetMapping
    public List<Diagnostics> getAllDiagnostics() {
        return diagnosticsService.getAllDiagnostics();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Diagnostics> getDiagnosticsById(@PathVariable Long id) {
        Optional<Diagnostics> diagnostics = diagnosticsService.getDiagnosticsById(id);
        return diagnostics.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Diagnostics createDiagnostics(@RequestBody Diagnostics diagnostics) {
        return diagnosticsService.createDiagnostics(diagnostics);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Diagnostics> updateDiagnostics(@PathVariable Long id, @RequestBody Diagnostics updatedDiagnostics) {
        try {
            Diagnostics diagnostics = diagnosticsService.updateDiagnostics(id, updatedDiagnostics);
            return ResponseEntity.ok(diagnostics);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDiagnostics(@PathVariable Long id) {
        diagnosticsService.deleteDiagnostics(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/patient/{patientId}")
    public List<Diagnostics> getDiagnosticsByPatientId(@PathVariable Long patientId) {
        return diagnosticsService.getDiagnosticsByPatientId(patientId);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Diagnostics> getDiagnosticsByDoctorId(@PathVariable Long doctorId) {
        return diagnosticsService.getDiagnosticsByDoctorId(doctorId);
    }
}
