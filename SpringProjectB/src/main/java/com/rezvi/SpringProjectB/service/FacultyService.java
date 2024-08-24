package com.rezvi.SpringProjectB.service;

import com.rezvi.SpringProjectB.entity.Department;
import com.rezvi.SpringProjectB.entity.Faculty;
import com.rezvi.SpringProjectB.repository.DepartmentRepository;
import com.rezvi.SpringProjectB.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyService {

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    public void saveFaculty(Faculty faculty) {
//        Department nDepartment = departmentRepository.findById(faculty.getDepartments().getId()).get();
//        faculty.setDepartments(nDepartment);
        facultyRepository.save(faculty);
    }

    public List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }

    public void deleteFacultyById(int id) {
        facultyRepository.deleteById(id);
    }

    public Faculty findById(int id) {
        return facultyRepository.findById(id).get();
    }

    public void updateFaculty(Faculty faculty) {
        facultyRepository.save(faculty);
    }
}
