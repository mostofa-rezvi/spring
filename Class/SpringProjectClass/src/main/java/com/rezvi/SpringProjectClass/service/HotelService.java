package com.rezvi.SpringProjectClass.service;

import com.rezvi.SpringProjectClass.entity.HotelEntity;
import com.rezvi.SpringProjectClass.entity.LocationEntity;
import com.rezvi.SpringProjectClass.repository.HotelRepository;
import com.rezvi.SpringProjectClass.repository.LocationRepository;
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
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private LocationRepository locationRepository;

    @Value("src/main/resources/static/images")
    private String uploadDir;

    public List<HotelEntity> getAllHotels() {
        return hotelRepository.findAll();
    }

    public void saveHotel(HotelEntity hotelEntity, MultipartFile multipartFile) throws IOException {
        LocationEntity locationEntity = locationRepository.findById(hotelEntity.getLocationEntity().getId())
                .orElseThrow(() -> new RuntimeException("Location not found"));

        if (multipartFile != null && !multipartFile.isEmpty()) {
            String imageFileName = saveImage(multipartFile, hotelEntity);
            hotelEntity.setImage(imageFileName);
        }

        hotelEntity.setLocationEntity(locationEntity);
        hotelRepository.save(hotelEntity);
    }

    public List<HotelEntity> findHotelByLocationName(String locationName) {
        return hotelRepository.findHotelByLocationName(locationName);
    }

    public void deleteHotel(int hotelId) {
        hotelRepository.deleteById(hotelId);
    }

    public HotelEntity getHotel(int hotelId) {
        return hotelRepository.findById(hotelId)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
    }

    private String saveImage(MultipartFile file, HotelEntity hotelEntity) throws IOException {
        Path uploadPath = Paths.get(uploadDir + "/hotel");
        if (!Files.exists(uploadPath)) {
            Files.createDirectory(uploadPath);
        }

        String fileName = hotelEntity.getName() + "_" + UUID.randomUUID().toString();
        Path filePath = uploadPath.resolve(fileName);

        Files.copy(file.getInputStream(), filePath);
        return fileName;
    }
}
