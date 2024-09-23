package com.hms.projectSpringBoot.service;

import com.hms.projectSpringBoot.entity.BillEntity;
import com.hms.projectSpringBoot.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public BillEntity createBill(BillEntity bill) {
        return billRepository.save(bill);
    }

    public List<BillEntity> getAllBills() {
        return billRepository.findAll();
    }

    public Optional<BillEntity> getBillById(long id) {
        return billRepository.findById(id);
    }

    public void deleteBill(long id) {
        billRepository.deleteById(id);
    }

    public List<BillEntity> getBillsByUserId(int userId) {
        return billRepository.findByUserId(userId);
    }
}
