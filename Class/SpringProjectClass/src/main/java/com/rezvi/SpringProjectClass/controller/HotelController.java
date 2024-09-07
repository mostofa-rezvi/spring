package com.rezvi.SpringProjectClass.controller;

import com.rezvi.SpringProjectClass.entity.HotelEntity;
import com.rezvi.SpringProjectClass.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/hotel")
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @PostMapping("/save")
    public ResponseEntity<String> saveHotel(
            @RequestPart HotelEntity hotelEntity,
            @RequestParam(value = "image", required = true) MultipartFile imageFile
            ) throws IOException {
        hotelService.saveHotel(hotelEntity, imageFile);

        return ResponseEntity.ok("Hotel add successfully with image");
    }

    @GetMapping("/")
    public ResponseEntity<List<HotelEntity>> getAllHotels() {
        List<HotelEntity> hotelEntities = hotelService.getAllHotels();
        return ResponseEntity.ok(hotelEntities);
    }

    @GetMapping("/h/searchhotel")
    public ResponseEntity<List<HotelEntity>> findHotelByLocationName(
            @RequestParam(value = "locationName") String locationName
     ){
        List<HotelEntity> hotelEntities = hotelService.findHotelByLocationName(locationName);
        return ResponseEntity.ok(hotelEntities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HotelEntity> findHotelById(@PathVariable int id){
        try {
            HotelEntity hotelEntity = hotelService.getHotel(id);
            return ResponseEntity.ok(hotelEntity);
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}