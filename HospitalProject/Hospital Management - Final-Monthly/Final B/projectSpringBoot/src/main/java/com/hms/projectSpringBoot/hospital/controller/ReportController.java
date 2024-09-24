package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Report;
import com.hms.projectSpringBoot.hospital.service.ReportService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping
    public ApiResponse getAllReports() {
        return reportService.getAllReports();
    }

    @GetMapping("/{id}")
    public ApiResponse getReportById(@PathVariable Long id) {
        return reportService.getReportById(id);
    }

    @PostMapping
    public ApiResponse createReport(@RequestBody Report report) {
        return reportService.createReport(report);
    }

    @PutMapping("/{id}")
    public ApiResponse updateReport(@PathVariable Long id, @RequestBody Report updatedReport) {
        return reportService.updateReport(id, updatedReport);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteReport(@PathVariable Long id) {
        return reportService.deleteReport(id);
    }

    @GetMapping("/diagnostics/{diagnosticsId}")
    public List<Report> getReportsByDiagnosticsId(@PathVariable Long diagnosticsId) {
        return reportService.getReportsByDiagnosticsId(diagnosticsId);
    }

    @GetMapping("/createdBy/{userId}")
    public List<Report> getReportsByCreatedById(@PathVariable Long userId) {
        return reportService.getReportsByCreatedById(userId);
    }
}
