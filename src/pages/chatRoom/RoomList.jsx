import React from "react";
import {Button, Collapse, Typography} from "antd";
import styled from "styled-components";
import {AppContext} from "../../context/AppProvider";
const {Panel} = Collapse;
const LinkStyled = styled(Typography.Link)`
  display: block;
`;
function RoomList() {
  const {rooms} = React.useContext(AppContext);
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header="Danh sách phòng" key="1" style={{display: "block"}}>
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}

        <Button>Thêm Phòng</Button>
      </Panel>
    </Collapse>
  );
}
export default RoomList;
