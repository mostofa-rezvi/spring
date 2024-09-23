package com.hms.projectSpringBoot.controller;

import com.hms.projectSpringBoot.entity.DepartmentEntity;
import com.hms.projectSpringBoot.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping
    public ResponseEntity<List<DepartmentEntity>> getAllDepartments() {
        List<DepartmentEntity> departments = departmentService.getAllDepartments();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentEntity> getDepartmentById(@PathVariable int id) {
        return departmentService.getDepartmentById(id)
                .map(department -> new ResponseEntity<>(department, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<DepartmentEntity> createDepartment(@RequestBody DepartmentEntity department) {
        DepartmentEntity createdDepartment = departmentService.createDepartment(department);
        return new ResponseEntity<>(createdDepartment, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentEntity> updateDepartment(@PathVariable int id, @RequestBody DepartmentEntity departmentDetails) {
        DepartmentEntity updatedDepartment = departmentService.updateDepartment(id, departmentDetails);
        return new ResponseEntity<>(updatedDepartment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable int id) {
        departmentService.deleteDepartment(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<DepartmentEntity>> findByDepartmentName(@RequestParam String name) {
        List<DepartmentEntity> departments = departmentService.findByDepartmentName(name);
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
}
