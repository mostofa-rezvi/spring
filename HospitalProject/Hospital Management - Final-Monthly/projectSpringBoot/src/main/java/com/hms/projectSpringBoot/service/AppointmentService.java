package com.hms.projectSpringBoot.service;

import com.hms.projectSpringBoot.entity.AppointmentEntity;
import com.hms.projectSpringBoot.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public AppointmentEntity createAppointment(AppointmentEntity appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<AppointmentEntity> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<AppointmentEntity> getAppointmentById(long id) {
        return appointmentRepository.findById(id);
    }

    public void deleteAppointment(long id) {
        appointmentRepository.deleteById(id);
    }

    public List<AppointmentEntity> getAppointmentsByUserId(int userId) {
        return appointmentRepository.findByUserId(userId);
    }

    public List<AppointmentEntity> getAppointmentsByDepartmentId(int departmentId) {
        return appointmentRepository.findByDepartmentId(departmentId);
    }
}
