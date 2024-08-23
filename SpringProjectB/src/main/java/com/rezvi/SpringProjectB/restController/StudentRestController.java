package com.rezvi.SpringProjectB.restController;

import com.rezvi.SpringProjectB.entity.Student;
import com.rezvi.SpringProjectB.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student/api")
public class StudentRestController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/save")
    public void saveStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable int id) {
//        StudentService.deleteById(id);
        studentService.deleteById(id);
    }

    // Update Method
//    @PutMapping("/update/{id}")
//    public void updateStudent(@PathVariable int id, @RequestBody Student student) {
//        studentService.updateStudent(student, id);
//    }

    // Update Method without ID
    @PutMapping("/update/")
    public void updateStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
    }
}
