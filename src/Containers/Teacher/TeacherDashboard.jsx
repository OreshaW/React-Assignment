import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Button, Table } from "reactstrap";
import "./TeacherDashboard.scss";

const TeachersDashboard = () => {
  return (
    <Container fluid className="teachers-container">
      {/* Teachers Details Section */}
      <Card className="section-card">
        <CardHeader className="section-header">Teacher Details</CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <Input type="text" placeholder="First Name *" required />
            </Col>
            <Col md={6}>
              <Input type="text" placeholder="Last Name" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Input type="text" placeholder="Contact No *" required />
            </Col>
            <Col md={6}>
              <Input type="email" placeholder="Email Address *" required />
            </Col>
          </Row>
          <div className="button-group mt-3">
            <Button color="success">Save</Button>
            <Button color="danger">Delete</Button>
            <Button color="warning">Reset</Button>
          </div>
        </CardBody>
      </Card>

      {/* Existing Teachers Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Existing Teachers</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact No</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>771234567</td>
                <td>johndoe@example.com</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>Smith</td>
                <td>772345678</td>
                <td>janesmith@example.com</td>
              </tr>
              <tr>
                <td>Michael</td>
                <td>Brown</td>
                <td>773456789</td>
                <td>michaelbrown@example.com</td>
              </tr>
              <tr>
                <td>Sarah</td>
                <td>Wilson</td>
                <td>774567890</td>
                <td>sarahwilson@example.com</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default TeachersDashboard;
