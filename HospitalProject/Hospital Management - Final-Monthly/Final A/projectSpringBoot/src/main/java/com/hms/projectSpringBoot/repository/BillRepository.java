package com.hms.projectSpringBoot.repository;

import com.hms.projectSpringBoot.entity.BillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<BillEntity, Long> {
    List<BillEntity> findByUserId(int userId);
}
