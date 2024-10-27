package com.rezvi.springbootproject.restController;

import com.rezvi.springbootproject.entity.LocationEntity;
import com.rezvi.springbootproject.repository.LocationRepository;
import com.rezvi.springbootproject.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/location")
public class LocationController {

    @Autowired
    private LocationService locationService;
    @Autowired
    private LocationRepository locationRepository;

    public ResponseEntity<List<LocationEntity>> getAllLocation() {
        List<LocationEntity> locationEntities = locationRepository.findAll();
        return ResponseEntity.ok(locationEntities);
    }
}
