// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Reporting {
    enum ReportType { AcademicProgress, ScholarshipProgress }

    struct Report {
        ReportType reportType;
        string reportDetails;
        bool isVerified;
    }

    mapping(address => Report) public reports;
    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    modifier onlyStudent(address _student) {
        require(msg.sender == _student, "Only the student can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function submitReport(ReportType _reportType, string memory _reportDetails) public {
        Report storage report = reports[msg.sender];
        report.reportType = _reportType;
        report.reportDetails = _reportDetails;
        report.isVerified = false;
    }

    function verifyReport(address _student) public onlyOwner {
        Report storage report = reports[_student];
        report.isVerified = true;
    }

    function getReport(address _student) public view onlyStudent(_student) returns (ReportType, string memory, bool) {
        Report storage report = reports[_student];
        return (report.reportType, report.reportDetails, report.isVerified);
    }
}
