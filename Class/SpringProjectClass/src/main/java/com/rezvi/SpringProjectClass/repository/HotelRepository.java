package com.rezvi.SpringProjectClass.repository;

import com.rezvi.SpringProjectClass.entity.HotelEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<HotelEntity, Integer> {

    @Query("SELECT h FROM HotelEntity h WHERE h.locationEntity.name = :locationName")
    List<HotelEntity> findHotelByLocationName(@Param("locationName") String locationName);

}
