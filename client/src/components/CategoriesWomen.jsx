import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const CategoriesWomen = () => {
  return (
    <Container>
      <CategoryItem item={categories[3]} key={categories[3].id} />
      <CategoryItem item={categories[4]} key={categories[4].id} />
      <CategoryItem item={categories[5]} key={categories[5].id} />
    </Container>
  );
};

export default CategoriesWomen;