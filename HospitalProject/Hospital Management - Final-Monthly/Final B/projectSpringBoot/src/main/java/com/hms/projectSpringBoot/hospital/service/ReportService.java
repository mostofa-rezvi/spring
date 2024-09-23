package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Report;
import com.hms.projectSpringBoot.hospital.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Optional<Report> getReportById(Long id) {
        return reportRepository.findById(id);
    }

    public Report createReport(Report report) {
        report.setCreatedAt(LocalDateTime.now());
        return reportRepository.save(report);
    }

    public Report updateReport(Long id, Report updatedReport) {
        return reportRepository.findById(id).map(report -> {
            report.setReportName(updatedReport.getReportName());
            report.setDescription(updatedReport.getDescription());
            report.setSummary(updatedReport.getSummary());
            report.setDiagnostics(updatedReport.getDiagnostics());
            report.setCreatedBy(updatedReport.getCreatedBy());
            report.setFinalized(updatedReport.isFinalized());

            report.setUpdatedAt(LocalDateTime.now());
            return reportRepository.save(report);
        }).orElseThrow(() -> new RuntimeException("Report not found"));
    }

    public void deleteReport(Long id) {
        reportRepository.deleteById(id);
    }

    public List<Report> getReportsByDiagnosticsId(Long diagnosticsId) {
        return reportRepository.findByDiagnosticsId(diagnosticsId);
    }

    public List<Report> getReportsByCreatedById(Long userId) {
        return reportRepository.findByCreatedById(userId);
    }
}
