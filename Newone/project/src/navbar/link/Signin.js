import React from "react";
import styled from "styled-components";
const Appcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
`;

const Buttonbox = styled.div`
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
`;
const Togglebutton = styled.div`
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
`;
const Btn = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.5s;
`;

const Inputgroup = styled.div`
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
`;
const Inputfield = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
`;
const Submitbutton = styled.div`
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;
const Checkbox = styled.div`
  margin: 30px 10px 30px 0;
`;
const Span = styled.div`
  color: #777;
  font-size: 12 px;
  bottom: 68px;
  position: absolute;
`;
const Login = styled.div`
  left: 50px;
`;
const Registration = styled.div`
  left: 450px;
`;
class Signin extends React.Component {
  render() {
    return (
      <Appcontainer>
        <Card>
          <Buttonbox>
            <Togglebutton>
              <Btn>
                <Login>Login</Login>
              </Btn>
            </Togglebutton>
          </Buttonbox>

          <Inputgroup>
            <Inputfield></Inputfield>
            <Inputfield>Password</Inputfield>
            <Checkbox></Checkbox> <Span>Remember the Password</Span>
          </Inputgroup>

          <Submitbutton>Submit</Submitbutton>
        </Card>
      </Appcontainer>
    );
  }
}
export default Signin;
