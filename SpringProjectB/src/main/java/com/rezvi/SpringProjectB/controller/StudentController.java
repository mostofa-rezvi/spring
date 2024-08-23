package com.rezvi.SpringProjectB.controller;

import com.rezvi.SpringProjectB.entity.Student;
import com.rezvi.SpringProjectB.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping("/savestudentform")
    public String saveStudent(Model model) {
        model.addAttribute("student", new Student());
        model.addAttribute("title", "Add New Student");
        return "saveStudentForm";
    }

    @PostMapping("/savestudent")
    public String saveStudent(@ModelAttribute("student") Student student) {
        studentService.saveStudent(student);
        return "redirect:/showAllStudent";
    }

    @RequestMapping("/showAllStudent")
    public String showAllStudent(Model model) {
        List<Student> studentList = studentService.getAllStudents();
        model.addAttribute("studentList", studentList);
        model.addAttribute("title", "All Students");
        return "showAllStudent";
    }

    @RequestMapping("deletestudent/{id}")
    public String deleteStudent(@PathVariable("id") int id) {
        studentService.deleteById(id);
        return "redirect:/showAllStudent";
    }

    @RequestMapping("/editstudent/{id}")
    public String editStudent(@PathVariable("id") int id, Model model) {
        Student student = studentService.findById(id);
        model.addAttribute("student", student);
        model.addAttribute("title", "Edit Student");
        return "savestudentform";
    }
}
