import styled from "styled-components";

export const PageTwo = () => {
  return (
    <Container>
      <Title>주문 형태를 선택해주세요</Title>
      <SelectContainer>
        <Hall>
          <span>매장</span>
          <span>식사</span>
        </Hall>
        <Package>
          <span>포장</span>
          <span>주문</span>
        </Package>
      </SelectContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9a7a7;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 36px;
`;
const Title = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background-color: #e9a7a7;
  color: #ffffff;
  width: 100%;
  height: 90%;
  font-size: 36px;
`;
const Hall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #aa1b1b;
  cursor: pointer;
`;
const Package = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: red;
  cursor: pointer;
`;
