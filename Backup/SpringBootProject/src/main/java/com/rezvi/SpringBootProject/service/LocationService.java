package com.rezvi.SpringProject.service;

import com.rezvi.SpringProject.entity.LocationEntity;
import com.rezvi.SpringProject.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<LocationEntity> getAllLocations(){

        return locationRepository.findAll();
    }

    public void saveLocation(LocationEntity locationEntity){

        locationRepository.save(locationEntity);
    }

    public void deleteLocation(int id){

        locationRepository.deleteById(id);
    }

    public LocationEntity findById(int id){
        return locationRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("No location found with id: " + id));
    }

}