import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px;
  align-items: center;
  border-bottom: 1px solid rgba(245, 222, 225, 0.6);
`;
const ButtonContentStyled = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNameStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeaderRoomStyled = styled.p`
  font-weight: bold;
  margin: 0 !important;
`;
const HeaderDescriptionStyled = styled.span`
  font-size: 12px;
`;

const ContentStyled = styled.div`
  height: -moz-calc(100% - (60px));
  height: -webkit-calc(100% - (60px));
  height: calc(100% - (60px));
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
  text-align: left;
`;
const MessageListStyled = styled.div`
  max-height:100%;
  overflow-y: auto;
`;
const Wrapper = styled.div`
  height: 100vh;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:2px;
  border-radius: 2px;
  border:1px solid rgb(230,230,230);
`;

const InputStyle = styled(Input)`
  flex:1;
  margin-bottom:0;
  width:100%;
`;

function ChatWindow() {
  const sourceAvt =
    "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/287450469_3543026579316832_1880226382081383770_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kzkj_qpwDSQAX8ACfSO&tn=-x00O3k9Gux9HuEF&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfDXFsot570XaaAgrsMB9eiLNThmG2wSpuGjmJ6xxiN9sw&oe=63CC0994";
  return (
    <Wrapper>
      <HeaderStyled>
        <HeaderNameStyled>
          <HeaderRoomStyled>Room1</HeaderRoomStyled>
          <HeaderDescriptionStyled>Đây là room 1</HeaderDescriptionStyled>
        </HeaderNameStyled>
        <ButtonContentStyled>
          <Button type="text" icon={<UserAddOutlined />}>
            Mời
          </Button>
          <Avatar.Group maxCount={3} size="small">
            <Tooltip title="Test">
              <Avatar src={sourceAvt}></Avatar>
            </Tooltip>
            <Tooltip title="Test1">
              <Avatar src={sourceAvt}></Avatar>
            </Tooltip>
            <Tooltip title="Test2">
              <Avatar src={sourceAvt}></Avatar>
            </Tooltip>
            <Tooltip title="Test3">
              <Avatar src={sourceAvt}></Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonContentStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
          <Message
            text="Test"
            photo={sourceAvt}
            displayName="Test"
            createAt="04-04-2000"
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item style={{ width: '100%' }}>
            <InputStyle bordered={false} autoComplete="off" placeholder="Nhập tin nhắn..." />
          </Form.Item>
          <Button>Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </Wrapper>
  );
}
export default ChatWindow;
