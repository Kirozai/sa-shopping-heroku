import "./transactions.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getOrders, getProducts, updateOrder } from "../../redux/apiCalls";
import { useEffect } from "react";

export default function Transactions() {

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  const users = useSelector((state) => state.user.users);
  const products = useSelector((state) => state.product.products);
  
  useEffect(() => {
    getUsers(dispatch);
    getProducts(dispatch);
    getOrders(dispatch);
  }, [dispatch]);

  const handleClick = (id, stt) => {
    updateOrder(id, stt, dispatch);
  };

  return (
    <div className="container">
      <div className="container2">
      <div className="bar" >
        <span>User</span>
        <span>Products &amp; Quantities</span>
        <span>Total</span>
        <span>Address</span>
        <span>Status</span>
      </div>
      <div >
      {orders.map((order) => {
        for (let i=0; i < orders.length; i++) {
          let op = order.products
          return (
            <div>
            <div className="bar2">
              <span>
              {(() => {
                const usIndex = users.findIndex((usr) => usr._id === order.userId);
                return users[usIndex].username
              })()}
              </span>
              <span>{(() => {
                const options = [];
                for (let i=0; i < op.length; i++) {
                  options.push(<span>{op[i].productId} : {op[i].quantity}<br/></span>);
                }
                return options;
              })()}</span>
              <span>$ {order.amount}</span>
              <span>{order.address.country}, {order.address.city}, {order.address.line1}, {order.address.postal_code}</span>
              <span>
                {order.status}
                <button className="btn" onClick={()=>handleClick(order._id, order.status)}>Change Status</button>
              </span>
            </div>
            <hr/>
            </div>
          )
        }
      })}
      </div>    
      </div> 
    </div>
  )
}
