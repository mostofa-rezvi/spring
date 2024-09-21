package com.rezvi.springbootproject.restController;

import com.rezvi.springbootproject.entity.HotelEntity;
import com.rezvi.springbootproject.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
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
            @RequestPart(value = "hotel") HotelEntity hotelEntity,
            @RequestParam(value = "image", required = true) MultipartFile imageFile
    ) throws IOException {

        hotelService.saveHotel(hotelEntity, imageFile);

        return new ResponseEntity<>("Hotel added successfully with image.", HttpStatus.OK);

    }


    @GetMapping("/")
    public ResponseEntity<List<HotelEntity>> getAllHotel() {
        List<HotelEntity> hotels = hotelService.getAllHotel();
        return ResponseEntity.ok(hotels);
    }

    @GetMapping("/h/searchhotel")
    public ResponseEntity<List<HotelEntity>> findHotelsByLocationName(@RequestParam(value = "locationName") String locationName) {
        List<HotelEntity> hotels = hotelService.findHotelsByLocationName(locationName);
        return ResponseEntity.ok(hotels);
    }


    @GetMapping("/{id}")
    public ResponseEntity<HotelEntity> findHotelById(@PathVariable int id) {
        try {
            HotelEntity hotelEntity = hotelService.findHotelById(id);
            return ResponseEntity.ok(hotelEntity);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
