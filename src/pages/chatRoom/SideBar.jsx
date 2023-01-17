import {Col, Row} from "antd";
import React from "react";
import styled from "styled-components";
import RoomList from "./RoomList";
import UserInfo from "./UserInfor";

const SideBarStyle = styled.div`
  background-color: rgba(245, 222, 225, 0.6);
  height: 100vh;
`;

function SideBar() {
  return (
    <SideBarStyle>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SideBarStyle>
  );
}
export default SideBar;
