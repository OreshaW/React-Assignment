import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Button, Table } from "reactstrap";
import "./SubjectDashboard.scss";

const SubjectsDashboard = () => {
  return (
    <Container fluid className="subjects-container">
      {/* Subject Details Section */}
      <Card className="section-card">
        <CardHeader className="section-header">Subject Details</CardHeader>
        <CardBody>
          <Row>
            <Col md={12}>
              <Input type="text" placeholder="Subject Name" />
            </Col>
          </Row>
          <div className="button-group mt-3">
            <Button color="success">Save</Button>
            <Button color="danger">Delete</Button>
            <Button color="warning">Reset</Button>
          </div>
        </CardBody>
      </Card>

      {/* Existing Subjects Table */}
      <Card className="section-card">
        <CardHeader className="section-header">Existing Subjects</CardHeader>
        <CardBody>
          <Table bordered>
            <thead>
              <tr>
                <th>Subject Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
              </tr>
              <tr>
                <td>Science</td>
              </tr>
              <tr>
                <td>History</td>
              </tr>
              <tr>
                <td>English</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SubjectsDashboard;
