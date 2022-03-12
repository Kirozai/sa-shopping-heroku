import { DeleteOutline } from "@material-ui/icons";
import { clearWishlist, removeFromWishlist } from "../redux/wishlistRedux";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { addProducts } from "../redux/cartRedux";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopButton2 = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 2%;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductClr = styled.div`
  display: flex;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0% 2%;
  border: 0.1px solid black;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
`;



const Button2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: red;
  cursor: pointer;
  border: none;
`;

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const prds = useSelector((state) => state.wishlist.products);
  const dispatch = useDispatch();

  const handleClick = (x, y, z) => {
    dispatch(
        removeFromWishlist({x, y, z})
    );
  };

  const handleClick2 = () => {
    dispatch(addProducts(prds))
    dispatch(clearWishlist())
  };
  


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Bottom>
          <Info>
            {wishlist.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName>
                      <b>Name:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Identifier:</b> {product._id}
                    </ProductId>
                    <ProductClr>
                      <b>Color:</b>
                    {product.color.map((color)=> {
                      return <ProductColor color={color} />
                    })}
                    </ProductClr>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                  <ProductPrice>
                    ${product.price}
                  </ProductPrice>
                    <Button2 onClick={() => handleClick(product._id, product.price, 1)} >
                      <DeleteOutline />
                    </Button2>
                  </ProductAmountContainer>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <Link to="/" style={{}}><TopButton>CONTINUE SHOPPING</TopButton></Link>
            <Link to="/cart" style={{}}><TopButton2 onClick={() => handleClick2()} >TRANSFER PRODUCTS TO CART</TopButton2></Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
