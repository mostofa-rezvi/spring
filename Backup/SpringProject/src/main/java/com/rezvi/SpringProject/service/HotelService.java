package com.rezvi.SpringProject.service;

import com.rezvi.SpringProject.entity.HotelEntity;
import com.rezvi.SpringProject.entity.LocationEntity;
import com.rezvi.SpringProject.repository.HotelRepository;
import com.rezvi.SpringProject.repository.LocationRepository;
import org.springframework.stereotype.Service;

import javax.xml.stream.Location;
import java.util.List;

@Service
public class HotelService {

    private HotelRepository hotelRepository;
    private LocationRepository locationRepository;

    public List<HotelEntity> getAllHotels() {
        return hotelRepository.findAll();
    }

    public void saveHotel(HotelEntity hotelEntity) {
        hotelRepository.save(hotelEntity);
        LocationEntity locationEntity = locationRepository.findById(hotelEntity.getLocationEntity().getId());
    }


}
