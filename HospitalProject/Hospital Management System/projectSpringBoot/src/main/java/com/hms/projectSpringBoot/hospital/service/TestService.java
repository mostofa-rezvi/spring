package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.TestEntity;
import com.hms.projectSpringBoot.hospital.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    public List<TestEntity> getAllTests() {
        return testRepository.findAll();
    }

    public Optional<TestEntity> getTestById(Long id) {
        return testRepository.findById(id);
    }

    public TestEntity createTest(TestEntity testEntity) {
        testEntity.setCreatedAt(LocalDateTime.now());
        return testRepository.save(testEntity);
    }

    public TestEntity updateTest(Long id, TestEntity updatedTest) {
        return testRepository.findById(id).map(test -> {
            test.setTestName(updatedTest.getTestName());
            test.setDescription(updatedTest.getDescription());
            test.setResult(updatedTest.getResult());
            test.setInstructions(updatedTest.getInstructions());
            test.setDiagnostics(updatedTest.getDiagnostics());

            test.setUpdatedAt(LocalDateTime.now());
            return testRepository.save(test);
        }).orElseThrow(() -> new RuntimeException("Test not found"));
    }

    public void deleteTest(Long id) {
        testRepository.deleteById(id);
    }

    public List<TestEntity> getTestsByDiagnosticsId(Long diagnosticsId) {
        return testRepository.findByDiagnosticsId(diagnosticsId);
    }
}
