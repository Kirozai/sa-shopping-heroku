import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../redux/store";
import { FlagIcon } from "react-flag-kit";
import LogoutIcon from '@mui/icons-material/Logout';
import { unconfirmPassword } from "../redux/apiCalls";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SecurityIcon from '@mui/icons-material/Security';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.button`
  background-color: white;
  outline: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  padding: 0;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const quantity2 = useSelector(state => state.wishlist.quantity);
  const user = useSelector((state) => state.user.currentUser);
  
  const dispatch = useDispatch()
  const unconfirmPass = () => {
    unconfirmPassword(dispatch);
  }

  const handleClick = () => {
    persistor.purge()
    window.location.reload(false)
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language><FlagIcon code="TN" size={30} style={{paddingTop: "5px"}}/></Language>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary" >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/wishlist">
            <MenuItem>
              <Badge badgeContent={quantity2} color="primary" >
                <FavoriteBorderIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }} >
            <Logo>S&amp;A</Logo>
          </Link>
        </Center>
        {user
          ? user.isAdmin ?
          <Right>
            <Link to="/profile" style={{color: "black", textDecoration:"none"}}>
              <button onClick={()=>unconfirmPass()} style={{fontWeight:"normal", backgroundColor:"transparent", border:"none", outline:"none", fontSize:"18px", cursor:"pointer"}}>{user.username}</button>
            </Link>
            <Link to="/adminpanel">
              <SecurityIcon style={{marginTop:"2px", color:"black"}}/>
            </Link>
            <Link to="/login">
            <MenuItem onClick={handleClick}><LogoutIcon style={{marginTop:"2px"}}/></MenuItem>
            </Link>
          </Right>
          :
          <Right>
            <Link to="/profile" style={{color: "black", textDecoration:"none"}}>
              <button onClick={()=>unconfirmPass()} style={{fontWeight:"normal", backgroundColor:"transparent", border:"none", outline:"none", fontSize:"18px", cursor:"pointer"}}>{user.username}</button>
            </Link>
            <Link to="/login">
            <MenuItem onClick={handleClick}><LogoutIcon style={{marginTop:"2px"}}/></MenuItem>
            </Link>
          </Right>
          :
          <Right>
            <Link to="/register" style={{ color: "black", textDecoration: "none" }} >
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          </Right>
        }
      </Wrapper>
    </Container>
  );
};

export default Navbar;
