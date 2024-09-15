package com.rezvi.SpringProject.restController;

import com.rezvi.SpringProject.entity.RoomEntity;
import com.rezvi.SpringProject.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/room")
@CrossOrigin("*")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/save")
    public ResponseEntity<String> saveRoom(
            @RequestPart(value = "room")RoomEntity roomEntity,
            @RequestParam(value = "image", required = true) MultipartFile imageFile
    ) throws IOException {
        roomService.saveRoom(roomEntity, imageFile);
        return new ResponseEntity<>("Room added successfully with image.", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<RoomEntity>> getAllRooms() {
        List<RoomEntity> roomEntities = roomService.getAllRooms();
        return ResponseEntity.ok(roomEntities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomEntity> getRoomById(
            @PathVariable int id) {
        RoomEntity roomEntity = roomService.findRoomById(id);
        return ResponseEntity.ok(roomEntity);
    }

    @GetMapping("/r/searchroom")
    public ResponseEntity<List<RoomEntity>> findRoomByHotelName(
            @RequestParam("hotelName") String hotelName
    ){
        List<RoomEntity> roomEntities = roomService.findRoomByHotelName(hotelName);
        return ResponseEntity.ok(roomEntities);
    }

    @GetMapping("/r/searchroombyid")
    public ResponseEntity<List<RoomEntity>> findRoomByHotelId(
            @RequestParam("hotelId") int hotelId
    ){
        List<RoomEntity> roomEntities = roomService.findRoomByHotelId(hotelId);
        return ResponseEntity.ok(roomEntities);
    }
}