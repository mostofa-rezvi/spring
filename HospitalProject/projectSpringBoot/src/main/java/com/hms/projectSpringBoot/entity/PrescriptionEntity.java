package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

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
    @JoinColumn(name = "userdoctor")
    private UserEntity userDoctor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userpatient")
    private UserEntity userPatient;

    // Relation with Patient and Doctor;
}
