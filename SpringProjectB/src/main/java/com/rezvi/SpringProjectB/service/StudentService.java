package com.rezvi.SpringProjectB.service;

import com.rezvi.SpringProjectB.entity.Department;
import com.rezvi.SpringProjectB.entity.Student;
import com.rezvi.SpringProjectB.repository.DepartmentRepository;
import com.rezvi.SpringProjectB.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    public void saveStudent(Student student) {
        Department department = departmentRepository.findById(student.getDepartment().getId())
                .orElseThrow(
                        () -> new RuntimeException("Department not found"
                                + student.getDepartment().getId())
                );
        student.setDepartment(department);
        studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void deleteById(int id) {
        studentRepository.deleteById(id);
    }

    public Student findById(int id) {
        return studentRepository.findById(id).get();
    }

    public void updateStudent(Student student, int id) {
        studentRepository.save(student);
    }
}
