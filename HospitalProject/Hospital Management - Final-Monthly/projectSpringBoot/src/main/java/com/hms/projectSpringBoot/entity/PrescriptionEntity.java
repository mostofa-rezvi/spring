package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
public class PrescriptionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Date prescriptionDate;
    private String notes;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctors")
    private UserEntity doctor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patients")
    private UserEntity patient;

    @OneToMany(mappedBy = "prescriptionEntity", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MedicineEntity> medicines; // List of medicines in this prescription

}
