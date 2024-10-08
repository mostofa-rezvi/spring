package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class ManufacturerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String manufacturerName;
    private String address;
    private String contactNumber;
    private String email;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;

    @OneToMany(mappedBy = "manufacturerEntity", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<MedicineEntity> medicines; // List of medicines produced by this manufacturer

}
