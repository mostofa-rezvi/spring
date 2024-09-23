package com.hms.projectSpringBoot.repository;

import com.hms.projectSpringBoot.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Long> {
    List<AppointmentEntity> findByUserId(int userId);
    List<AppointmentEntity> findByDepartmentId(int departmentId);
}
