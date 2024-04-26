import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
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
  height: 100vh;
  width: 100vw;
  background-color: #278157;
`;
