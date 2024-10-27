package com.rezvi.springbootproject.service;

import com.rezvi.springbootproject.entity.HotelEntity;
import com.rezvi.springbootproject.entity.RoomEntity;
import com.rezvi.springbootproject.repository.HotelRepository;
import com.rezvi.springbootproject.repository.RoomRepository;
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
    private HotelRepository hotelRepository;

    @Value("src/main/resources/static/images")
    private String uploadDir;

    public List<RoomEntity> getALlRooms() {
        return roomRepository.findAll();
    }

    @Transactional
    public void saveRoom(RoomEntity roomEntity, MultipartFile imageFile) throws IOException {
        HotelEntity hotelEntity = hotelRepository.findById(roomEntity.getHotelEntity().getId())
                .orElseThrow(() -> new RuntimeException("Hotel With this Id not Found"));

        System.out.println("Hotel " + hotelEntity.toString());

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageFilename = saveImage(imageFile, roomEntity);
            roomEntity.setImage(imageFilename);
        }

        roomEntity.setHotelEntity(hotelEntity);
        roomRepository.save(roomEntity);
    }

    public void deleteRoom(long id) {
        roomRepository.deleteById(id);
    }

    public RoomEntity findById(long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room Not Found by this Id"));
    }

    public List<RoomEntity> findRoomByHotelName(String hotelName) {
        return roomRepository.findRoomByHotelName(hotelName);
    }

    public List<RoomEntity> findRoomByHotelId(int hotelId) {
        return roomRepository.findRoomByHotelId(hotelId);
    }

    private String saveImage(MultipartFile file, RoomEntity roomEntity) throws IOException {
        Path uploadPath = Paths.get(uploadDir + "/room");

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String filename = roomEntity.getRoomType() + "_" + UUID.randomUUID().toString();
        Path filePath = uploadPath.resolve(filename);

        Files.copy(file.getInputStream(), filePath);
        return filename;
    }
}
