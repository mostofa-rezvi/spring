package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Bill;
import com.hms.projectSpringBoot.hospital.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    public Optional<Bill> getBillById(Long id) {
        return billRepository.findById(id);
    }

    public Bill createBill(Bill bill) {
        return billRepository.save(bill);
    }

    public Bill updateBill(Long id, Bill updatedBill) {
        return billRepository.findById(id).map(bill -> {
            bill.setInvoiceDate(updatedBill.getInvoiceDate());
            bill.setTotalAmount(updatedBill.getTotalAmount());
            bill.setAmountPaid(updatedBill.getAmountPaid());
            bill.setBalance(updatedBill.getBalance());
            bill.setStatus(updatedBill.getStatus());
            bill.setDescription(updatedBill.getDescription());
            bill.setCreatedAt(updatedBill.getCreatedAt());
            bill.setUpdatedAt(updatedBill.getUpdatedAt());
            bill.setPatient(updatedBill.getPatient());
            bill.setDoctor(updatedBill.getDoctor());
            bill.setPharmacist(updatedBill.getPharmacist());
            return billRepository.save(bill);
        }).orElseThrow(() -> new RuntimeException("Bill not found"));
    }

    public void deleteBill(Long id) {
        billRepository.deleteById(id);
    }

    public List<Bill> getBillsByPatientId(Long patientId) {
        return billRepository.findByPatientId(patientId);
    }

    public List<Bill> getBillsByDoctorId(Long doctorId) {
        return billRepository.findByDoctorId(doctorId);
    }

    public List<Bill> getBillsByPharmacistId(Long pharmacistId) {
        return billRepository.findByPharmacistId(pharmacistId);
    }
}
