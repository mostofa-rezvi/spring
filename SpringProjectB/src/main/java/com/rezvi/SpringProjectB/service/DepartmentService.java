package com.rezvi.SpringProjectB.service;

import com.rezvi.SpringProjectB.entity.Department;
import com.rezvi.SpringProjectB.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public void saveDepartment(Department department) {
        departmentRepository.save(department);
    }


    public List<Department> getAllDepartment() {
        return departmentRepository.findAll();
    }

    public void deleteDepartmentById(int id) {
        departmentRepository.deleteById(id);
    }

    public Department findById(int id) {
        return departmentRepository.findById(id).get();
    }

    public void updateDepartment(Department department) {
        departmentRepository.save(department);
    }
}
