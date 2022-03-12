import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { newsletterregister } from "../redux/apiCalls";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: rgb(0, 59, 59);
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    newsletterregister(dispatch, { email });
  };
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy.</Desc>
      <InputContainer>
        <Input placeholder="Your e-mail" style={{outline: "none", border: "none"}} onChange={(e) => setEmail(e.target.value)} />
        {user
        ?
        <Link to="/newsletterregister" style={{textDecoration: "none", color: "white", flex: 1}}>
            <Button onClick={handleClick}>
              <Send />
            </Button>
        </Link>
        :
        <Link to="/login" style={{textDecoration: "none", color: "white", flex: 1}}>
            <Button>
              <Send />
            </Button>
        </Link>
        } 
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
