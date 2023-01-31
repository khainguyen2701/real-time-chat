import { LogoutOutlined } from "@ant-design/icons/lib/icons";
import { Avatar, Button, Typography } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
`;

function UserInfo() {
  const handleClickSignOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapShot) => {
      const data = snapShot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
      console.log("data", data);
    });
  }, [])
  const sourceAvt =
    "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/287450469_3543026579316832_1880226382081383770_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kzkj_qpwDSQAX8ACfSO&tn=-x00O3k9Gux9HuEF&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfDXFsot570XaaAgrsMB9eiLNThmG2wSpuGjmJ6xxiN9sw&oe=63CC0994";
  return (
    <WrapperStyled>
      <div>
        <Avatar src={sourceAvt} />
        <Typography.Text>Test</Typography.Text>
      </div>
      <Button type="primary" ghost icon={<LogoutOutlined />} onClick={handleClickSignOut}>
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
export default UserInfo;
