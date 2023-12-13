// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Student {
    struct StudentInfo {
        string name;
        string academicRecord;
        bool hasAppliedForScholarship;
        string progressReport;
    }

    struct ScholarshipApplication {
        string details;
        bool isRecipient;
    }

    mapping(address => StudentInfo) public students;
    mapping(address => ScholarshipApplication) public applications;

    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setStudentInfo(string memory _name, string memory _academicRecord) public onlyOwner {
        StudentInfo storage student = students[msg.sender];
        student.name = _name;
        student.academicRecord = _academicRecord;
    }

    function applyForScholarship(string memory _details) public onlyOwner {
        ScholarshipApplication storage application = applications[msg.sender];
        application.details = _details;
        application.isRecipient = false;

        StudentInfo storage student = students[msg.sender];
        student.hasAppliedForScholarship = true;
    }

    function submitProgressReport(string memory _report) public onlyOwner {
        StudentInfo storage student = students[msg.sender];
        student.progressReport = _report;
    }

    function getStudentInfo(address _student) public view returns (string memory, string memory, bool, string memory) {
        StudentInfo storage student = students[_student];
        return (student.name, student.academicRecord, student.hasAppliedForScholarship, student.progressReport);
    }

    function getApplication(address _student) public view returns (string memory, bool) {
        ScholarshipApplication storage application = applications[_student];
        return (application.details, application.isRecipient);
    }
}
