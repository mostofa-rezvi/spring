package com.rezvi.SpringProjectClass.restController;


import com.rezvi.SpringProjectClass.entity.LocationEntity;
import com.rezvi.SpringProjectClass.repository.LocationRepository;
import com.rezvi.SpringProjectClass.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/location")
@CrossOrigin("*")
public class LocationController {

    @Autowired
    private LocationService locationService;
    @Autowired
    private LocationRepository locationRepository;


    @GetMapping("/")
    public ResponseEntity<List<LocationEntity>> getAllLocations() {
        List<LocationEntity> locations = locationRepository.findAll();
        return ResponseEntity.ok(locations);
    }


}