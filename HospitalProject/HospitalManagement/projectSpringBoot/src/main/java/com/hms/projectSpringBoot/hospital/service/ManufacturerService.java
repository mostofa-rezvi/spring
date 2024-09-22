package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import com.hms.projectSpringBoot.hospital.repository.ManufacturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ManufacturerService {

    @Autowired
    private ManufacturerRepository manufacturerRepository;

    // Get all manufacturers
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }

    // Get manufacturer by ID
    public Optional<Manufacturer> getManufacturerById(Long id) {
        return manufacturerRepository.findById(id);
    }

    // Create a new manufacturer
    public Manufacturer createManufacturer(Manufacturer manufacturer) {
        manufacturer.setCreatedAt(LocalDateTime.now());
        manufacturer.setUpdatedAt(LocalDateTime.now());
        return manufacturerRepository.save(manufacturer);
    }

    // Update an existing manufacturer
    public Manufacturer updateManufacturer(Long id, Manufacturer manufacturerDetails) {
        Manufacturer manufacturer = manufacturerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Manufacturer not found"));

        manufacturer.setManufacturerName(manufacturerDetails.getManufacturerName());
        manufacturer.setAddress(manufacturerDetails.getAddress());
        manufacturer.setContactNumber(manufacturerDetails.getContactNumber());
        manufacturer.setEmail(manufacturerDetails.getEmail());
        manufacturer.setUpdatedAt(LocalDateTime.now());

        return manufacturerRepository.save(manufacturer);
    }

    // Delete a manufacturer
    public void deleteManufacturer(Long id) {
        Manufacturer manufacturer = manufacturerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Manufacturer not found"));

        manufacturer.setDeletedAt(LocalDateTime.now());
        manufacturerRepository.save(manufacturer); // Soft delete by setting deletedAt
    }
}
