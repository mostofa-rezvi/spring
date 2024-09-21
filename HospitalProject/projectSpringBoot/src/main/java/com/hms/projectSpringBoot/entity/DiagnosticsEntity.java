package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class DiagnosticsEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date testDate;
    private String testResult;
    private int price;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userdoctor")
    private UserEntity userDoctor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userpatient")
    private UserEntity userPatient;

    // Relation with patient, doctor
}
