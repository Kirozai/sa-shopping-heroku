import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { Refresh, Search } from "@material-ui/icons";
import CachedIcon from '@mui/icons-material/Cached';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display:flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  height: 60%;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;


const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const ref = () => {
    window.location.reload(false)
  }

  var [inputText, setInputText] = useState("");
  const InputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <div style={{display:"flex", marginRight:"10px", alignItems:"center"}}>
      <Title>{cat}</Title>
      <SearchContainer>
        <Input placeholder="Search" style={{outline:"none"}} onChange={InputHandler} />
        <Search style={{ color: "gray", fontSize: 16, cursor: "pointer" }} />
      </SearchContainer>
      </div>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option selected disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Pink</Option>
            <Option>Brown</Option>
            <Option>Orange</Option>
            <Option>Gray</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <CachedIcon onClick={()=>ref()}/>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} input={inputText}/>
      <Footer />
    </Container>
  );
};

export default ProductList;
