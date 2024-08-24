package com.rezvi.SpringProjectB.restController;

import com.rezvi.SpringProjectB.entity.Student;
import com.rezvi.SpringProjectB.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student/api")
public class StudentRestController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
        return new ResponseEntity<>("Student Created", HttpStatus.OK);
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
