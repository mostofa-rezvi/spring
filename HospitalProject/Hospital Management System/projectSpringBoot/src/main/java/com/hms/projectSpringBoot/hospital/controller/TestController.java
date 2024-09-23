package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.TestEntity;
import com.hms.projectSpringBoot.hospital.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tests")
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping
    public List<TestEntity> getAllTests() {
        return testService.getAllTests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestEntity> getTestById(@PathVariable Long id) {
        Optional<TestEntity> test = testService.getTestById(id);
        return test.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TestEntity> createTest(@RequestBody TestEntity testEntity) {
        TestEntity createdTest = testService.createTest(testEntity);
        return ResponseEntity.status(201).body(createdTest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TestEntity> updateTest(@PathVariable Long id, @RequestBody TestEntity updatedTest) {
        try {
            TestEntity test = testService.updateTest(id, updatedTest);
            return ResponseEntity.ok(test);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTest(@PathVariable Long id) {
        testService.deleteTest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/diagnostics/{diagnosticsId}")
    public List<TestEntity> getTestsByDiagnosticsId(@PathVariable Long diagnosticsId) {
        return testService.getTestsByDiagnosticsId(diagnosticsId);
    }
}
