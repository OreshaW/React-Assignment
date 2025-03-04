import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Input } from "reactstrap";
import "./StudentDetail.scss";

const StudentDetailReport = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [subjectTeacherList, setSubjectTeacherList] = useState([]);

  useEffect(() => {
    // Fetch students from API (Replace with actual API call)
    setStudents([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch student details (Replace with actual API call)
      setStudentDetails({
        contactPerson: "Mr. Doe",
        contactNo: "123-456-7890",
        email: "johndoe@example.com",
        dob: "2005-06-15",
        classroom: "Class A",
      });

      // Fetch subject-teacher list (Replace with actual API call)
      setSubjectTeacherList([
        { subject: "Mathematics", teacher: "Mr. Anderson" },
        { subject: "Science", teacher: "Ms. Watson" },
      ]);
    } else {
      setStudentDetails(null);
      setSubjectTeacherList([]);
    }
  }, [selectedStudent]);

  return (
    <Container fluid className="student-detail-container">
      {/* Student Selection */}
      <Card className="section-card">
        <CardHeader className="section-header">Select Student</CardHeader>
        <CardBody>
          <Row>
            <Col md={8}>
              <Input
                type="select"
                onChange={(e) => setSelectedStudent(e.target.value)}
                value={selectedStudent}
              >
                <option value="">Select a student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.name}>
                    {student.name}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Student Details */}
      {studentDetails && (
        <Card className="section-card">
          <CardHeader className="section-header">Student Details</CardHeader>
          <CardBody>
            <Row>
              <Col md={6}><strong>Contact Person:</strong> {studentDetails.contactPerson}</Col>
              <Col md={6}><strong>Contact No:</strong> {studentDetails.contactNo}</Col>
            </Row>
            <Row>
              <Col md={6}><strong>Email Address:</strong> {studentDetails.email}</Col>
              <Col md={6}><strong>Date of Birth:</strong> {studentDetails.dob}</Col>
            </Row>
            <Row>
              <Col md={6}><strong>Classroom:</strong> {studentDetails.classroom}</Col>
            </Row>
          </CardBody>
        </Card>
      )}

      {/* Subject & Teacher List */}
      {subjectTeacherList.length > 0 && (
        <Card className="section-card">
          <CardHeader className="section-header">Subject & Teacher List</CardHeader>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {subjectTeacherList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      )}
    </Container>
  );
};

export default StudentDetailReport;
