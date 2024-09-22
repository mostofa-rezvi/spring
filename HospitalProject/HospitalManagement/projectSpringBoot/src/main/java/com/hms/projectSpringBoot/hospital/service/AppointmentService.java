package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Appointment;
import com.hms.projectSpringBoot.hospital.repository.AppointmentRepository;
import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.security.repository.UserRepository;
import com.hms.projectSpringBoot.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public Appointment createAppointment(Appointment appointment) {
        User user = userRepository.findById(appointment.getRequestedBy().getId()).orElse(null);

        if (user == null || user.getRole() == null) {
            throw new IllegalArgumentException("User must have a valid role and must exist.");
        }

        return appointmentRepository.save(appointment);
    }

    public Appointment updateAppointment(Appointment appointment) {
        User user = userRepository.findById(appointment.getRequestedBy().getId()).orElse(null);

        if (user == null || user.getRole() == null) {
            throw new IllegalArgumentException("User must have a valid role and must exist.");
        }

        return appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepository.findByRequestedById(userId);
    }

    public List<Appointment> getAppointmentsByDoctorId(Long doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }
}
