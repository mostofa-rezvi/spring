package com.rezvi.springbootproject.repository;

import com.rezvi.springbootproject.entity.HotelEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<HotelEntity, Integer> {

    @Query("SELECT h FROM HotelEntity h WHERE h.locationEntity.locationName = :locationName")
    List<HotelEntity> findHotelsByLocationName(@Param("locationName") String locationName);

}
