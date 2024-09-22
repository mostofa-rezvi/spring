package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Medicine;
import com.hms.projectSpringBoot.hospital.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    // Get all medicines
    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    // Get medicine by ID
    public Optional<Medicine> getMedicineById(Long id) {
        return medicineRepository.findById(id);
    }

    // Save or update a medicine
    public Medicine saveOrUpdateMedicine(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    // Delete a medicine by ID
    public void deleteMedicine(Long id) {
        medicineRepository.deleteById(id);
    }

    // Get medicines by manufacturer
    public List<Medicine> getMedicinesByManufacturer(Long manufacturerId) {
        return medicineRepository.findByManufacturer_Id(manufacturerId);
    }

    // Get medicines by prescription
    public List<Medicine> getMedicinesByPrescription(Long prescriptionId) {
        return medicineRepository.findByPrescription_Id(prescriptionId);
    }

    // Search medicines by name
    public List<Medicine> searchMedicinesByName(String medicineName) {
        return medicineRepository.findByMedicineNameContainingIgnoreCase(medicineName);
    }
}
