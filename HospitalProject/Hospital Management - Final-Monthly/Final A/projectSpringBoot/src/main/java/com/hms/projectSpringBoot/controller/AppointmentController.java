package com.hms.projectSpringBoot.controller;

import com.hms.projectSpringBoot.entity.AppointmentEntity;
import com.hms.projectSpringBoot.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create")
    public ResponseEntity<AppointmentEntity> createAppointment(@RequestBody AppointmentEntity appointment) {
        AppointmentEntity createdAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(createdAppointment);
    }

    @GetMapping("/")
    public ResponseEntity<List<AppointmentEntity>> getAllAppointments() {
        List<AppointmentEntity> appointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentEntity> getAppointmentById(@PathVariable long id) {
        Optional<AppointmentEntity> appointment = appointmentService.getAppointmentById(id);
        return appointment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable long id) {
        appointmentService.deleteAppointment(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AppointmentEntity>> getAppointmentsByUserId(@PathVariable int userId) {
        List<AppointmentEntity> appointments = appointmentService.getAppointmentsByUserId(userId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/department/{departmentId}")
    public ResponseEntity<List<AppointmentEntity>> getAppointmentsByDepartmentId(@PathVariable int departmentId) {
        List<AppointmentEntity> appointments = appointmentService.getAppointmentsByDepartmentId(departmentId);
        return ResponseEntity.ok(appointments);
    }
}
