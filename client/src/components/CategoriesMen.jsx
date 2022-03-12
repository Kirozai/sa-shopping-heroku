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

const CategoriesMen = () => {
  return (
    <Container>
      <CategoryItem item={categories[0]} key={categories[0].id} />
      <CategoryItem item={categories[1]} key={categories[1].id} />
      <CategoryItem item={categories[2]} key={categories[2].id} />
    </Container>
  );
};

export default CategoriesMen;
