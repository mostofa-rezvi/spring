package com.rezvi.SpringProjectClass.repository;

import com.rezvi.SpringProjectClass.entity.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<RoomEntity, Integer> {

    @Query("Select r from RoomEntity r Where r.hotelEntity.name= :hotelName")
    public List<RoomEntity> findRoomByHotelName(@Param("hotelName") String hotelName);

    @Query("Select r from RoomEntity r Where r.hotelEntity.id= :hotelId")
    public List<RoomEntity> findRoomByHotelId(@Param("hotelId") int hotelId);
}
