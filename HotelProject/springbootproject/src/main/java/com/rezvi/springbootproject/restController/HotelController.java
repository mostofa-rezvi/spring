package com.rezvi.springbootproject.restController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rezvi.springbootproject.entity.HotelEntity;
import com.rezvi.springbootproject.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/hotel")
@CrossOrigin
public class HotelController {

    @Autowired
    private HotelService hotelService;


    @PostMapping("/save")
    public ResponseEntity<Map<String, String>> saveHotel(
            @RequestPart(value = "hotel") String hotelJson,
            @RequestParam(value = "image") MultipartFile imageFile
    ) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        HotelEntity hotel = objectMapper.readValue(hotelJson, HotelEntity.class);

        try {
            hotelService.saveHotel(hotel, imageFile);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Hotel added successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception exception) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to add hotel: " + exception.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
        } catch (RuntimeException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}
