import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>S&amp;A</Logo>
        <Desc>
        Since 2008, the Foundation of S&amp;A has worked to ensure the necessary conditions 
        are in place to create new works of art, transmit skills and know-how &amp; produce
        the highest quality designs.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link to="/" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Home</ListItem></Link>
          <Link to="/products/T-shirts" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>T-shirts</ListItem></Link>
          <Link to="/products/Valentine's%20Collection%20Men" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Valentine's Collection Men</ListItem></Link>
          <Link to="/products/Light%20Jackets" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Light Jackets</ListItem></Link>
          <Link to="/products/Dresses" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Dresses</ListItem></Link>
          <Link to="/products/Valentine's%20Collection%20Women" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Valentine's Collection Women</ListItem></Link>
          <Link to="/products/Denim%20Jeans" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Denim Jeans</ListItem></Link>
          <Link to="/cart" style={{color: "black", textDecoration: "none", width: "50%", marginBottom: "10px"}} ><ListItem>Cart</ListItem></Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Wall Street, Lake Banks 2, 2046
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +(216) 58 521 172 / +(216) 93 011 606
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> sa-retail@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
