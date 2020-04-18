import React from "react";
import { Card, Col, Row } from "reactstrap";
import LoginForm from "./loginForm";
class LoginPage extends React.Component {
  render() {
    return (
      <Row
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Col md={6} lg={4}>
          <Card body>
            <LoginForm {...this.props}/>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LoginPage;
