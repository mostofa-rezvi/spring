package com.hms.projectSpringBoot.service;

import com.hms.projectSpringBoot.entity.UserEntity;
import com.hms.projectSpringBoot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserEntity> getUserById(int id) {
        return userRepository.findById(id);
    }

    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    public UserEntity updateUser(int id, UserEntity userDetails) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

//        user.setName(userDetails.getName());
//        user.setEmail(userDetails.getEmail());
//        user.setPassword(userDetails.getPassword());
//        user.setCell(userDetails.getCell());
//        user.setAge(userDetails.getAge());
//        user.setGender(userDetails.getGender());
//        user.setBirthday(userDetails.getBirthday());
//        user.setAddress(userDetails.getAddress());
//        user.setImage(userDetails.getImage());
//        user.setDoctorDegree(userDetails.getDoctorDegree());
//        user.setDoctorSpeciality(userDetails.getDoctorSpeciality());
//        user.setDoctorLicense(userDetails.getDoctorLicense());
//        user.setNurseDegree(userDetails.getNurseDegree());
//        user.setNurseSpeciality(userDetails.getNurseSpeciality());
//        user.setNurseLicense(userDetails.getNurseLicense());
//        user.setDepartment(userDetails.getDepartment());
//        user.setRole(userDetails.getRole());

        return userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public UserEntity getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
