import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Table, Input } from "reactstrap";
import "./AllocateClassroom.scss";

const AllocateClassroomDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [allocatedClassrooms, setAllocatedClassrooms] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState("");

  useEffect(() => {
    // Fetch teachers from API (Replace with actual API call)
    setTeachers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" }
    ]);

    // Fetch classrooms from API (Replace with actual API call)
    setClassrooms([
      { id: 1, name: "Class A" },
      { id: 2, name: "Class B" },
      { id: 3, name: "Class C" }
    ]);
  }, []);

  const handleAllocate = () => {
    if (selectedTeacher && selectedClassroom) {
      setAllocatedClassrooms([...allocatedClassrooms, { teacher: selectedTeacher, classroom: selectedClassroom }]);
    }
  };

  const handleDeallocate = (index) => {
    const updatedList = allocatedClassrooms.filter((_, i) => i !== index);
    setAllocatedClassrooms(updatedList);
  };

  return (
    <Container fluid className="allocate-classrooms-container">
      {/* Teachers Details */}
      <Card className="section-card">
        <CardHeader className="section-header">Teachers Details</CardHeader>
        <CardBody>
          <Row>
            <Col md={8}>
              <Input type="select" onChange={(e) => setSelectedTeacher(e.target.value)} value={selectedTeacher}>
                <option value="">Select a teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.name}>
                    {teacher.name}
                  </option>
                ))}
              </Input>
            </Col>
            <Col md={4}>
              <Button color="success">Save</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Allocate Classrooms */}
      <Card className="section-card">
        <CardHeader className="section-header">Allocated Classrooms</CardHeader>
        <CardBody>
          <Row>
            <Col md={8}>
              <Input type="select" onChange={(e) => setSelectedClassroom(e.target.value)} value={selectedClassroom}>
                <option value="">Select a classroom</option>
                {classrooms.map((classroom) => (
                  <option key={classroom.id} value={classroom.name}>
                    {classroom.name}
                  </option>
                ))}
              </Input>
            </Col>
            <Col md={4}>
              <Button color="success" onClick={handleAllocate}>
                Allocate
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Allocated Classrooms Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Allocated Classrooms</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>Classroom</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allocatedClassrooms.map((item, index) => (
                <tr key={index}>
                  <td>{item.classroom}</td>
                  <td>
                    <Button color="danger" onClick={() => handleDeallocate(index)}>
                      Deallocate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AllocateClassroomDashboard;
