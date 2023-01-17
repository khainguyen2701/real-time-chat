import {Button, Col, Row, Typography} from "antd";
import React from "react";
import {signInWithPopup, FacebookAuthProvider, signOut} from "firebase/auth";
import {auth} from "../../firebase";
function Login() {
  const {Title} = Typography;

  const fbProvider = new FacebookAuthProvider();

  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, fbProvider)
      .then((item) => {})
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleLogoutWithFacebook = () => {
    signOut(auth)
      .then((item) => {
        console.log("successfully", item);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div style={{width: "100%"}}>
      <Row justify="center" style={{height: "800px"}}>
        <Col span={24}>
          <Title style={{textAlign: "center"}} level={3}>
            Real time chat app
          </Title>
          <Button
            style={{width: "100%", marginBottom: "10px"}}
            onClick={handleLoginWithFacebook}
          >
            Đăng nhập với Facebook
          </Button>
          <Button
            style={{width: "100%", marginBottom: "10px"}}
            onClick={handleLogoutWithFacebook}
          >
            Logout
          </Button>
          <Button style={{width: "100%"}}>Đăng nhập với Google</Button>
        </Col>
      </Row>
    </div>
  );
}
export default Login;
