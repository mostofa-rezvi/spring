package com.rezvi.springbootproject.service;

import com.rezvi.springbootproject.entity.HotelEntity;
import com.rezvi.springbootproject.entity.LocationEntity;
import com.rezvi.springbootproject.repository.HotelRepository;
import com.rezvi.springbootproject.repository.LocationRepository;
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
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private LocationRepository locationRepository;

    @Value("src/main/resources/static/images")
    private  String uploadDir;


    public List<HotelEntity> getAllHotel(){
        return  hotelRepository.findAll();
    }

    public void saveHotel(HotelEntity hotelEntity, MultipartFile imageFile) throws IOException {
        LocationEntity locationEntity=locationRepository.findById(hotelEntity.getLocationEntity().getId())
                .orElseThrow(()-> new RuntimeException("Location With this Id not Found"));

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageFilename = saveImage(imageFile, hotelEntity);
            hotelEntity.setImage(imageFilename);
        }

        hotelEntity.setLocationEntity(locationEntity);
        hotelRepository.save(hotelEntity);
    }

    public void deleteHotelById(int id){
        hotelRepository.deleteById(id);
    }

    public HotelEntity findHotelById(int id){
        return  hotelRepository.findById(id)
                .orElseThrow(
                        ()->new RuntimeException("Hotel Not found With this ID")
                );
    }

    @Transactional
    public void updateHotel(int id, HotelEntity updatedHotel, MultipartFile imageFile) throws IOException {
        HotelEntity existingHotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found with this ID"));

        existingHotel.setName(updatedHotel.getName());
        existingHotel.setAddress(updatedHotel.getAddress());
        existingHotel.setRating(updatedHotel.getRating());
        existingHotel.setMinPrice(updatedHotel.getMinPrice());
        existingHotel.setMaxPrice(updatedHotel.getMaxPrice());

        LocationEntity location = locationRepository.findById(updatedHotel.getLocationEntity().getId())
                .orElseThrow(() -> new RuntimeException("Location with this ID not found"));
        existingHotel.setLocationEntity(location);

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageFilename = saveImage(imageFile, existingHotel);
            existingHotel.setImage(imageFilename);
        }
        hotelRepository.save(existingHotel);
    }


    public List<HotelEntity> findHotelsByLocationName(String locationName){
        return hotelRepository.findHotelsByLocationName(locationName);
    }




    private String saveImage(MultipartFile file, HotelEntity hotelEntity) throws IOException {
        Path uploadPath = Paths.get(uploadDir+"/hotel");
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String filename = hotelEntity.getName()+"_"+ UUID.randomUUID().toString() ;
        Path filePath = uploadPath.resolve(filename);

        Files.copy(file.getInputStream(), filePath);

        return filename;
    }
}
