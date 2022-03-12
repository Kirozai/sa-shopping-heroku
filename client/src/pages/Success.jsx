import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import {Link} from "react-router-dom";
import styled from "styled-components";
import DateRangeIcon from '@mui/icons-material/DateRange';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

import {
  MailOutline,
  Phone,
  Room
} from "@material-ui/icons";


const Container = styled.div`
  height: fit-content;
  padding-bottom: 1%;
  width: 30%;
  margin: 3% auto;
  border: 2px solid black;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 3%;
  justify-content: space-between;
  font-weight: normal;
  font-size: 25px;
`;


const Container3 = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 3%;
  justify-content: space-between;
  font-weight: normal;
  font-size: 25px;
`;


const Duo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 3%;
`;

const Duo2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 5%;
  font-size: 16px;
`;

const Duo3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 5%;
  font-size: 16px;
`;

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const [orderTime, setOrderTime] = useState(null);
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item.title,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        setOrderTime(res.data.createdAt)
        setProducts(res.data.products)
        setAddress(res.data.address)
        setTotal(res.data.amount)
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <>
    <Navbar/>
    <Announcement/>
    <Container>
      <Container2>
      <h1 style={{fontSize:"40px"}}>S&amp;A</h1>
      <span>Payement Receipt</span>
      </Container2>
      <Container3>
        <Duo>
        <Duo3>
          <Room style={{marginRight:"10px"}}/>
          <span>Wall Street, Lake Banks 2, 2046</span>
        </Duo3>
        <Duo3>
          <DateRangeIcon style={{marginRight:"10px"}}/>
          <span>{orderTime}</span>
        </Duo3>
        </Duo>
        <Duo>
          <Duo2>
          <span>+(216) 58521172 / 93011606</span>
          <Phone style={{marginLeft:"10px"}}/>
          </Duo2>
          <Duo2>
          <span>sa-retail@gmail.com</span>
          <MailOutline style={{marginLeft:"10px"}}/>
          </Duo2>
        </Duo>
      </Container3>
      <div style={{fontSize:"30px", marginLeft:"3.5%"}}>Order Details :</div>
      <div style={{fontSize:"25px", marginLeft:"4%", marginTop:"3%"}}>Products :</div>
      <div style={{fontSize:"18px", marginLeft:"4%", marginTop:"3%"}}>{products.map((product)=> <div>{product.quantity} x {product.productId} </div>)}</div>
      <div style={{fontSize:"25px", marginLeft:"4%", marginTop:"3%"}}>Address :</div>
      <div style={{fontSize:"18px", marginLeft:"4%", marginTop:"3%"}}>{address.country}, {address.city}, {address.line1}, {address.postal_code}</div>
      <div style={{display:"flex", alignItems:"center", marginTop:"3%"}}>
      <div style={{fontSize:"25px", marginLeft:"4%"}}>Buyer :</div>
      <div style={{fontSize:"20px", marginLeft:"2%"}}>{currentUser.username}</div>
      </div>
      <div style={{display:"flex", alignItems:"center", marginTop:"3%"}}>
      <div style={{fontSize:"25px", marginLeft:"4%"}}>Total :</div>
      <div style={{fontSize:"20px", marginLeft:"2%"}}>{total}$</div>
      </div>
      <div style={{fontSize:"20px", marginLeft:"4%", marginTop:"3%", textAlign:"right", marginRight:"3%"}}>Order Id : <span style={{fontSize:"16px"}}>{orderId}</span></div>
    </Container>
    </>
  );
};

export default Success;
