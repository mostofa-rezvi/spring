package com.hms.projectSpringBoot.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    private int cell;
    private int age;
    private String gender;
    private Date birthday;
    private String address;
    private String image;
    private String doctorDegree;
    private String doctorSpeciality;
    private String doctorLicense;
    private String nurseDegree;
    private String nurseSpeciality;
    private String nurseLicense;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "departmentId")
    private DepartmentEntity department;
}
