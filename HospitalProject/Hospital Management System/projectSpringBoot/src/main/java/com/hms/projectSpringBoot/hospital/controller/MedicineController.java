package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import com.hms.projectSpringBoot.hospital.entity.Medicine;
import com.hms.projectSpringBoot.hospital.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "*")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @GetMapping
    public ResponseEntity<List<Medicine>> getAllMedicines() {
        List<Medicine> medicines = medicineService.getAllMedicines();
        return ResponseEntity.ok(medicines);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id) {
        Optional<Medicine> medicine = medicineService.getMedicineById(id);
        return medicine.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Medicine> createMedicine(@RequestBody Medicine medicine) {
        Medicine savedMedicine = medicineService.saveMedicine(medicine);
        return ResponseEntity.ok(savedMedicine);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicine) {
        Medicine updatedMedicine = medicineService.updateMedicine(id, medicine);
        return ResponseEntity.ok(updatedMedicine);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicine(@PathVariable Long id) {
        medicineService.deleteMedicine(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/manufacturer/{manufacturerId}")
    public ResponseEntity<List<Medicine>> getMedicinesByManufacturer(@PathVariable Long manufacturerId) {
        List<Medicine> medicines = medicineService.getMedicinesByManufacturer(manufacturerId);
        return ResponseEntity.ok(medicines);
    }

    @GetMapping("/prescription/{prescriptionId}")
    public ResponseEntity<List<Medicine>> getMedicinesByPrescription(@PathVariable Long prescriptionId) {
        List<Medicine> medicines = medicineService.getMedicinesByPrescription(prescriptionId);
        return ResponseEntity.ok(medicines);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Medicine>> searchMedicinesByName(@RequestParam String name) {
        List<Medicine> medicines = medicineService.searchMedicinesByName(name);
        return ResponseEntity.ok(medicines);
    }
}
