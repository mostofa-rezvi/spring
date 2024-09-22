package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import com.hms.projectSpringBoot.hospital.service.ManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/manufacturers")
@CrossOrigin(origins = "*")
public class ManufacturerController {

    @Autowired
    private ManufacturerService manufacturerService;

    // Get all manufacturers
    @GetMapping
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerService.getAllManufacturers();
    }

    // Get a manufacturer by ID
    @GetMapping("/{id}")
    public ResponseEntity<Manufacturer> getManufacturerById(@PathVariable Long id) {
        Optional<Manufacturer> manufacturer = manufacturerService.getManufacturerById(id);
        if (manufacturer.isPresent()) {
            return ResponseEntity.ok(manufacturer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new manufacturer
    @PostMapping
    public ResponseEntity<Manufacturer> createManufacturer(@RequestBody Manufacturer manufacturer) {
        Manufacturer createdManufacturer = manufacturerService.createManufacturer(manufacturer);
        return ResponseEntity.ok(createdManufacturer);
    }

    // Update a manufacturer by ID
    @PutMapping("/{id}")
    public ResponseEntity<Manufacturer> updateManufacturer(@PathVariable Long id, @RequestBody Manufacturer manufacturerDetails) {
        Manufacturer updatedManufacturer = manufacturerService.updateManufacturer(id, manufacturerDetails);
        return ResponseEntity.ok(updatedManufacturer);
    }

    // Delete a manufacturer (soft delete)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManufacturer(@PathVariable Long id) {
        manufacturerService.deleteManufacturer(id);
        return ResponseEntity.noContent().build();
    }
}