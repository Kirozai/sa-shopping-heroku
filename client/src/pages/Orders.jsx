import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getUserOrders } from "../redux/apiCalls";
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin: 1% 1%;
`;

const Bar = styled.div `
  display: flex;
  justify-content: space-around;
  color: teal;
  padding: 1% 0%;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  align-items: center;
  text-align: center;
`;
const Bar2 = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 2% 0%;
`;

const Orders = () => {
  const userOrders = useSelector((state) => state.user.orders)
  const userId = useSelector((state)=>state.user.currentUser._id)
  const dispatch = useDispatch()

  return (
    <>
        <Navbar/>
        <Announcement/>
        <Container>
          <Bar>
            <span style={{flex:1}}>Products &amp; Quantities</span>
            <span style={{flex:1}}>Total</span>
            <span style={{flex:1}}>Address</span>
            <span style={{flex:1}}>Status</span>
          </Bar>
          <div>
            {userOrders.map((order) => {
              for (let i=0; i < userOrders.length; i++) {
                let op = order.products
                return (
                <>
                  <hr />
                  <Bar2>
                    <span style={{flex:1}}>{(() => {
                      const options = [];
                      for (let i=0; i < op.length; i++) {
                        options.push(<span style={{flex:1}}>{op[i].quantity} x {op[i].productId} <br/></span>);
                      }
                      return options;
                    })()}</span>
                    <span style={{flex:1}}>$ {order.amount}</span>
                    <span style={{flex:1}}>{order.address.country}, {order.address.city}, {order.address.line1}, {order.address.postal_code}</span>
                    <span style={{flex:1}}>{order.status}</span>
                  </Bar2>
                </>
                )
              }
            })}
          </div>
        </Container>
    </>
  );

};

export default Orders;
