import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCredentials } from "../redux/apiCalls";


const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20vh;
  text-align: center;
`;

const Input = styled.input`
  border-radius: 12px;
  border: none;
  flex: 1;
  min-width: 20%;
  padding: 10px;
  outline: 0;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 15px 20px;
  background-color: transparent;
  color: teal;
  cursor: pointer;
  font-weight: 600;
`;

const Title = styled.h1 `
    font-size: 30px;
    color: teal;
`;

const Duo = styled.div `
    display: flex;
    align-items: center;
    margin: 20px 0px 0px 0px;
    border: 2px solid teal;
    width: 300px;
`;

const Security = () => {
   
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usr = useSelector((state) => state.user.currentUser.username);
    const eml = useSelector((state) => state.user.currentUser.email);
    const id = useSelector((state) => state.user.currentUser._id) ;
    const dispatch = useDispatch();
    const [err, setErr] = useState(false)
    const [err2, setErr2] = useState(false)
    const [err3, setErr3] = useState(false)
    const handleClick = (type) => {
        if (type === "username") {
          if (username === "") {
            setErr(true)
          } else { updateCredentials(dispatch,  id, type, username ); }
        } else if (type === "email") {
          if (email === "") {
            setErr2(true)
          } else { updateCredentials(dispatch,  id, type, usr, email ); }
        } else if (type === "password") {
          if (password === "") {
            setErr3(true)
          } else { updateCredentials(dispatch,  id, type, usr, eml, password ); }
        }
    };

  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Form>
          <Title>Account Settings</Title>
          <Duo>
            <Input placeholder={usr} onChange={(e) => setUsername(e.target.value)}/>
            <Button onClick={() => handleClick("username")}>Change Username</Button>
          </Duo>
          {err ? <span style={{marginTop:"10px", color:"red"}}>Empty Username !</span> : <></>}
          <Duo>
            <Input placeholder={eml} onChange={(e) => setEmail(e.target.value)}/>
            <Button onClick={() => handleClick("email")}>Change E-Mail</Button>
          </Duo>
          {err2 ? <span style={{marginTop:"10px", color:"red"}}>Empty E-Mail !</span> : <></>}
          <Duo>
            <Input placeholder="New Password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={() => handleClick("password")}>Change Password</Button>
          </Duo>
          {err3 ? <span style={{marginTop:"10px", color:"red"}}>Empty Password !</span> : <></>}
        </Form>
    </div>
  );

};

export default Security;
