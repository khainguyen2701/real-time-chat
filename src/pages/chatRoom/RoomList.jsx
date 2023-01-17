import React from "react";
import {Button, Collapse, Typography} from "antd";
import styled from "styled-components";
const {Panel} = Collapse;
const LinkStyled = styled(Typography.Link)`
  display: block;
`;
function RoomList() {
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header="Danh sách phòng" key="1" style={{display: "block"}}>
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled>
        <Button>Thêm Phòng</Button>
      </Panel>
    </Collapse>
  );
}
export default RoomList;
