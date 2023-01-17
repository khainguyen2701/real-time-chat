import {Avatar, Typography} from "antd";
import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  margin-bottom: 10px;
`;

const ContentDisplayName = styled(Typography.Text)`
  margin-left: 5px;
  font-weight: bold;
`;

const ContentCreateAt = styled(Typography.Text)`
  margin-left: 5px;
  font-size: 11px;
  color: #a7a7a7;
`;

function Message({text, displayName, createAt, photo}) {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photo} />
        <ContentDisplayName>{displayName}</ContentDisplayName>
        <ContentCreateAt>{createAt}</ContentCreateAt>
      </div>
      <div>
        <Typography.Text>{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}
export default Message;
