import {Col, Row, Typography} from "antd";
import React from "react";
import ChatWindow from "./ChatWindow";
import SideBar from "./SideBar";
function Login() {
  const {Title} = Typography;

  return (
    <Row>
      <Col span={6}>
        <Title style={{textAlign: "center"}} level={3}>
          <SideBar />
        </Title>
      </Col>
      <Col span={18}>
        <Title style={{textAlign: "center"}} level={3}>
          <ChatWindow />
        </Title>
      </Col>
    </Row>
  );
}
export default Login;
