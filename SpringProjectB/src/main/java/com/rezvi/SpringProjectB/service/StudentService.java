package com.rezvi.SpringProjectB.service;

import com.rezvi.SpringProjectB.entity.Student;
import com.rezvi.SpringProjectB.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void saveStudent(Student student) {
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
