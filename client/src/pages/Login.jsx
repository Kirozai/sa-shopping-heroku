import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Container = styled.div`
  width: 100vw;
  height: 90%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/1437673.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: white;
  width: 25%;
  border-radius: 12px;
  padding: 20px;
  background-color: rgba(0,0,0,0.5);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  min-width: 60%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width:25%;
  padding: 10px 20px;
  background-color: transparent;
  font-weight: 600;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Anchor = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: #eb5600;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  
  return (
    <div style={{height:"100vh"}}>
    <Navbar/>
    <Announcement/>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong Credentials !</Error>}
          <Link to="/register" style={{color: "white", textDecoration: "none"}}><Anchor>CREATE A NEW ACCOUNT</Anchor></Link>
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Login;
