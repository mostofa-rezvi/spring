package com.rezvi.SpringProjectClass.repository;

import com.rezvi.SpringProjectClass.entity.LocationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<LocationEntity, Integer> {

}
