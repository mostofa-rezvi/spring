package com.hms.projectSpringBoot.controller;

import com.hms.projectSpringBoot.entity.BillEntity;
import com.hms.projectSpringBoot.service.BillService;
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

    @PostMapping("create")
    public ResponseEntity<BillEntity> createBill(@RequestBody BillEntity bill) {
        BillEntity createdBill = billService.createBill(bill);
        return ResponseEntity.ok(createdBill);
    }

    @GetMapping("/")
    public ResponseEntity<List<BillEntity>> getAllBills() {
        List<BillEntity> bills = billService.getAllBills();
        return ResponseEntity.ok(bills);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillEntity> getBillById(@PathVariable long id) {
        Optional<BillEntity> bill = billService.getBillById(id);
        return bill.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBill(@PathVariable long id) {
        billService.deleteBill(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BillEntity>> getBillsByUserId(@PathVariable int userId) {
        List<BillEntity> bills = billService.getBillsByUserId(userId);
        return ResponseEntity.ok(bills);
    }
}
