package com.rezvi.SpringProjectB.restController;

import com.rezvi.SpringProjectB.entity.Department;
import com.rezvi.SpringProjectB.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/department")
public class DepartmentRestController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/")
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartment();
    }

    @PostMapping("/save")
    public void saveDepartment(@RequestBody Department department) {
        departmentService.saveDepartment(department);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDepartment(@PathVariable("id") int id) {
        departmentService.deleteDepartmentById(id);
    }

    @PutMapping("/update")
    public void updateDepartment(@RequestBody Department department) {
        departmentService.updateDepartment(department);
    }
}
