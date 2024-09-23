package com.hms.projectSpringBoot.service;

import com.hms.projectSpringBoot.entity.DepartmentEntity;
import com.hms.projectSpringBoot.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public List<DepartmentEntity> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Optional<DepartmentEntity> getDepartmentById(int id) {
        return departmentRepository.findById(id);
    }

    public DepartmentEntity createDepartment(DepartmentEntity department) {
        return departmentRepository.save(department);
    }

    public DepartmentEntity updateDepartment(int id, DepartmentEntity departmentDetails) {
        DepartmentEntity department = departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department not found"));
        department.setDepartmentName(departmentDetails.getDepartmentName());
        department.setDescription(departmentDetails.getDescription());
        return departmentRepository.save(department);
    }

    public void deleteDepartment(int id) {
        departmentRepository.deleteById(id);
    }

    public List<DepartmentEntity> findByDepartmentName(String name) {
        return departmentRepository.findByDepartmentName(name);
    }
}
