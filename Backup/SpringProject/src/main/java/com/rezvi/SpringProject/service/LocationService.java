package com.rezvi.SpringProject.service;

import com.rezvi.SpringProject.entity.LocationEntity;
import com.rezvi.SpringProject.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private LocationRepository locationRepository;

    public List<LocationEntity> findAllLocation() {
        return locationRepository.findAll();
    }

    public void saveLocation(LocationEntity location) {
        locationRepository.save(location);
    }

    public void deleteLocation(int id){
        locationRepository.delete(id);
    }

    public LocationEntity findById(int id) {
        return locationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Location"));
    }
}
