package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class MedicineEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String medicineName;
    private String dosageForm;
    private String instructions;

    private String medicineStrength;
    private int price;
    private String manufacturer;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "manufacturerId")
    private ManufacturerEntity manufacturerEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prescriptionID")
    private PrescriptionEntity prescriptionEntity;

}
