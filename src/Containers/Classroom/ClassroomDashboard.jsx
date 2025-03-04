import React, { useState } from "react";
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
import "./ClassroomDashboard.scss";

const ClassroomDashboard = () => {
  // State for classroom form
  const [classroom, setClassroom] = useState({
    name: "",
  });

  // State for list of classrooms
  const [classrooms, setClassrooms] = useState([
    { id: 1, name: "Grade 1" },
    { id: 2, name: "Grade 2" },
    { id: 3, name: "Grade 3" },
  ]);

  // Handle input change
  const handleChange = (e) => {
    setClassroom({ ...classroom, name: e.target.value });
  };

  // Handle form submission (Mock)
  const handleSave = () => {
    if (classroom.name.trim() === "") {
      alert("Classroom Name is required!");
      return;
    }
    const newClassroom = {
      id: classrooms.length + 1, // Simulating an ID
      name: classroom.name,
    };
    setClassrooms([...classrooms, newClassroom]);
    setClassroom({ name: "" });
  };

  // Handle Reset
  const handleReset = () => {
    setClassroom({ name: "" });
  };

  return (
    <Container fluid className="classrooms-container">
      {/* Classroom Details Section */}
      <Card className="section-card">
        <CardHeader className="section-header">Classroom Details</CardHeader>
        <CardBody>
          <Row>
            <Col md={12}>
              <Input
                type="text"
                name="name"
                placeholder="Classroom Name *"
                value={classroom.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <div className="button-group mt-3">
            <Button color="success" onClick={handleSave}>
              Save
            </Button>
            <Button color="warning" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Existing Classrooms Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Existing Classrooms</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>Classroom Name</th>
              </tr>
            </thead>
            <tbody>
              {classrooms.map((cls, index) => (
                <tr key={cls.id}>
                  <td>{cls.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ClassroomDashboard;
