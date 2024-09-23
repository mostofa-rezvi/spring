package com.hms.projectSpringBoot.repository;

import com.hms.projectSpringBoot.entity.DepartmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<DepartmentEntity, Integer> {

    List<DepartmentEntity> findByDepartmentName(String name);

}
