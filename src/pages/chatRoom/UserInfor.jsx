import {LogoutOutlined} from "@ant-design/icons/lib/icons";
import {Avatar, Button, Typography} from "antd";
import React from "react";
import styled from "styled-components";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import {AuthContext} from "../../context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
`;

function UserInfo() {
  const handleClickSignOut = () => {
    signOut(auth);
  };

  const {
    user: {displayName, photoURL}
  } = React.useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text>{displayName}</Typography.Text>
      </div>
      <Button type="primary" ghost icon={<LogoutOutlined />} onClick={handleClickSignOut}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
export default UserInfo;
