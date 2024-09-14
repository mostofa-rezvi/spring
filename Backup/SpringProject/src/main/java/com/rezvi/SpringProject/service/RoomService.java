package com.rezvi.SpringProject.service;

import com.rezvi.SpringProject.entity.HotelEntity;
import com.rezvi.SpringProject.entity.RoomEntity;
import com.rezvi.SpringProject.repository.HotelRepository;
import com.rezvi.SpringProject.repository.RoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomService roomService;

    @Value("src/main/resources/static/images")
    private String uploadDir;
    @Autowired
    private HotelRepository hotelRepository;

    public List<RoomEntity> getAllRooms(){
        return roomRepository.findAll();
    }

    @Transactional
    public void saveRoom(RoomEntity roomEntity, MultipartFile imageFile) throws IOException {

        HotelEntity hotelEntity = hotelRepository.findById(roomEntity.getHotelEntity().getId())
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        System.out.println("Hotel " + hotelEntity.toString());

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageFileName = saveImage(imageFile, roomEntity);
            roomEntity.setImage(imageFileName);
        }

        roomEntity.setHotelEntity(hotelEntity);

        roomRepository.save(roomEntity);
    }

    public void deleteRoom(int id){
        roomRepository.deleteById(id);
    }

    public RoomEntity findRoomById(int id){
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));
    }

    public List<RoomEntity> findRoomByHotelName(String hotelName){
        return roomRepository.findRoomByHotelName(hotelName);
    }

    public List<RoomEntity> findRoomByHotelId(int hotelId){
        return roomRepository.findRoomByHotelId(hotelId);
    }

    private String saveImage(MultipartFile imageFile, RoomEntity roomEntity) throws IOException {
        Path uploadPath = Paths.get(uploadDir + "/room");

        if (!Files.exists(uploadPath)){
            Files.createDirectory(uploadPath);
        }

        String fileName = roomEntity.getRoomType() + "_" + UUID.randomUUID().toString();
        Path filePath = uploadPath.resolve(fileName);

        Files.copy(filePath, filePath);

        return fileName;
    }

}