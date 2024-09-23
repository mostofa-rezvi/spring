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

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public Optional<Medicine> getMedicineById(Long id) {
        return medicineRepository.findById(id);
    }

    public Medicine saveOrUpdateMedicine(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    public void deleteMedicine(Long id) {
        medicineRepository.deleteById(id);
    }

    public List<Medicine> getMedicinesByManufacturer(Long manufacturerId) {
        return medicineRepository.findByManufacturer_Id(manufacturerId);
    }

    public List<Medicine> getMedicinesByPrescription(Long prescriptionId) {
        return medicineRepository.findByPrescription_Id(prescriptionId);
    }

    public List<Medicine> searchMedicinesByName(String medicineName) {
        return medicineRepository.findByMedicineNameContainingIgnoreCase(medicineName);
    }
}
