import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Burger = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 90%;
  border-radius: 20px;
  overflow: hidden;
  background-color: #dad26d;
`;
