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

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "manufacturers")
    private ManufacturerEntity manufacturerEntity; // References the manufacturer of the medicine

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "prescriptions")
    private PrescriptionEntity prescriptionEntity; // References the associated prescription

}
