package com.rezvi.springbootproject.restController;

import com.rezvi.springbootproject.entity.RoomEntity;
import com.rezvi.springbootproject.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/room")
@CrossOrigin(origins = "http://localhost:4200/")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/save")
    public ResponseEntity<String> saveRoom(
            @RequestPart(value = "room") RoomEntity roomEntity,
            @RequestParam(value = "image", required = true) MultipartFile file
    ) throws IOException {

        roomService.saveRoom(roomEntity, file);
        return new ResponseEntity<>("Room added successfully with image.", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<RoomEntity>> getAllRoom() {
        List<RoomEntity> rooms = roomService.getALlRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomEntity> findRoomById(@PathVariable int id) {
        try {
            RoomEntity roomEntity = roomService.findById(id);
            return ResponseEntity.ok(roomEntity);
        } catch (RuntimeException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/r/searchroom")
    public ResponseEntity<List<RoomEntity>> findRoomByHotelName(@RequestParam("hotelName") String hotelName) {
        List<RoomEntity> rooms = roomService.findRoomByHotelName(hotelName);
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/r/searchroombyid")
    public ResponseEntity<List<RoomEntity>> findRoomByHotelId(@RequestParam("hotelId") int hotelId) {
        List<RoomEntity> rooms = roomService.findRoomByHotelId(hotelId);
        return ResponseEntity.ok(rooms);
    }
}
