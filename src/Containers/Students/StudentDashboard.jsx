import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Table,
} from "reactstrap";
import "./StudentDashboard.scss";

const StudentDashboard = () => {
  // State for student form
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    dob: "",
    age: "",
    classroom: "",
  });

  // State for classrooms
  const [classrooms, setClassrooms] = useState([]);

  // Fetch classroom data (Mock API call)
  useEffect(() => {
    // Simulating fetching classrooms from a database
    const mockClassrooms = [
      { id: 1, name: "Grade 1" },
      { id: 2, name: "Grade 2" },
      { id: 3, name: "Grade 3" },
    ];
    setClassrooms(mockClassrooms);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-calculate age when DOB is entered
    if (name === "dob") {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      setStudent((prev) => ({
        ...prev,
        age: age >= 0 ? age : "",
      }));
    }
  };

  return (
    <Container fluid className="students-container">
      {/* Student Details Section */}
      <Card className="section-card">
        <CardHeader className="section-header">Student Details</CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={student.firstName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={student.lastName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Input
                type="text"
                name="contactPerson"
                placeholder="Contact Person *"
                value={student.contactPerson}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Input
                type="text"
                name="contactNo"
                placeholder="Contact No *"
                value={student.contactNo}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={student.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Input
                type="text"
                name="age"
                placeholder="Age"
                value={student.age}
                readOnly
              />
            </Col>
            <Col md={6}>
              <Input
                type="select"
                name="classroom"
                value={student.classroom}
                onChange={handleChange}
                required
              >
                <option value="">Select Classroom *</option>
                {classrooms.map((cls) => (
                  <option key={cls.id} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>
          <div className="button-group mt-3">
            <Button color="success">Save</Button>
            <Button color="danger">Delete</Button>
            <Button color="warning">Reset</Button>
          </div>
        </CardBody>
      </Card>

      {/* Existing Students Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Existing Students</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Person</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Classroom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mario</td>
                <td>Speedwagon</td>
                <td>Petey Cruiser</td>
                <td>771234567</td>
                <td>mario@example.com</td>
                <td>2005-10-12</td>
                <td>19</td>
                <td>Grade 1</td>
              </tr>
              <tr>
                <td>Anna</td>
                <td>Shehisa</td>
                <td>Paul Molive</td>
                <td>771230456</td>
                <td>anna@example.com</td>
                <td>2007-06-22</td>
                <td>17</td>
                <td>Grade 2</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default StudentDashboard;
