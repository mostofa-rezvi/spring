package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Bill;
import com.hms.projectSpringBoot.hospital.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bills")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping
    public List<Bill> getAllBills() {
        return billService.getAllBills();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bill> getBillById(@PathVariable Long id) {
        Optional<Bill> bill = billService.getBillById(id);
        return bill.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Bill createBill(@RequestBody Bill bill) {
        return billService.createBill(bill);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bill> updateBill(@PathVariable Long id, @RequestBody Bill updatedBill) {
        try {
            Bill bill = billService.updateBill(id, updatedBill);
            return ResponseEntity.ok(bill);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBill(@PathVariable Long id) {
        billService.deleteBill(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/patient/{patientId}")
    public List<Bill> getBillsByPatientId(@PathVariable Long patientId) {
        return billService.getBillsByPatientId(patientId);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Bill> getBillsByDoctorId(@PathVariable Long doctorId) {
        return billService.getBillsByDoctorId(doctorId);
    }

    @GetMapping("/pharmacist/{pharmacistId}")
    public List<Bill> getBillsByPharmacistId(@PathVariable Long pharmacistId) {
        return billService.getBillsByPharmacistId(pharmacistId);
    }
}
