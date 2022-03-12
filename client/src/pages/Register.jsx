import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from "react-redux";


const Container = styled.div` 
  width: 100vw;
  height: 90%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://w.wallha.com/ws/11/naS1ZQ7z.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
border-radius: 8px;
  width: 32%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5 );
  color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Input = styled.input`
  border: 0;
  outline: 0; 
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: 2px solid white;
  width: 30%;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
`;

const Duo = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  min-width: 43%;
  
`;

const Button2 = styled.button`
 margin: 20px 0px 0px 0px;
  border: none;
  outline: 0;
  color: grey;
  background-color: white;
  cursor: pointer;
`;

const Error = styled.div`
  margin-left: 20px;

`;

const Duo2 = styled.div`
  display: flex;
  align-items: center;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error2 } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let visible = true;
  const handleVisibility = () => {
    visible = !visible
    if (visible === true) {
      document.getElementById("pass").setAttribute("type", "text");
    } else {
      document.getElementById("pass").setAttribute("type", "password");
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <div style={{height:"100vh"}}>
    <Navbar/>
    <Announcement/>
    <Container>
      <Wrapper>
        <Title>REGISTER  ACCOUNT</Title>
        <Form>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}/>
            <Duo>
              <Input type="text" placeholder="Password" id="pass" onChange={(e) => setPassword(e.target.value)}/>
              <Button2 id="passvis"  onClick={()=>handleVisibility()}><VisibilityIcon/></Button2>
            </Duo>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Duo2>
          <Button onClick={handleClick} >CREATE</Button>
          {error2 && <Error>Empty Fields !</Error>}
          </Duo2>
        </Form>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Register;
