import styled from "styled-components";
import { genders } from "../data";
import { mobile } from "../responsive";
import CategoryGender from "./CategoryGender";

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
      <CategoryGender item={genders[0]} key={genders[0].id} />
      <CategoryGender item={genders[1]} key={genders[1].id} />
    </Container>
  );
};

export default CategoriesMen;
