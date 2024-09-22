package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    // Custom query to find medicines by name (case-insensitive)
    List<Medicine> findByMedicineNameContainingIgnoreCase(String medicineName);

    // Find all medicines by manufacturer
    List<Medicine> findByManufacturer_Id(Long manufacturerId);

    // Find medicines by prescription ID
    List<Medicine> findByPrescription_Id(Long prescriptionId);
}
