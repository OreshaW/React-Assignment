import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Table, Input } from "reactstrap";
import "./AllocateSubjects.scss";

const AllocateSubjects = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [allocatedSubjects, setAllocatedSubjects] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    // Fetch teachers from API (Replace with actual API)
    setTeachers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" }
    ]);

    // Fetch subjects from API (Replace with actual API)
    setSubjects([
      { id: 1, name: "Mathematics" },
      { id: 2, name: "Science" },
      { id: 3, name: "History" }
    ]);
  }, []);

  const handleAllocate = () => {
    if (selectedTeacher && selectedSubject) {
      setAllocatedSubjects([...allocatedSubjects, { teacher: selectedTeacher, subject: selectedSubject }]);
    }
  };

  const handleDeallocate = (index) => {
    const updatedList = allocatedSubjects.filter((_, i) => i !== index);
    setAllocatedSubjects(updatedList);
  };

  return (
    <Container fluid className="allocate-subjects-container">
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

      {/* Allocate Subjects */}
      <Card className="section-card">
        <CardHeader className="section-header">Allocated Subjects</CardHeader>
        <CardBody>
          <Row>
            <Col md={8}>
              <Input type="select" onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject}>
                <option value="">Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.name}>
                    {subject.name}
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

      {/* Allocated Subjects Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Allocated Subjects</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allocatedSubjects.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
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

export default AllocateSubjects;
