import styled from "styled-components";
import { subjectData } from "../../data/data";
import { Subject, SubjectType } from "../../components/Subject";

export const Home = () => {
  const data = subjectData;
  return (
    <Container>
      <Title>원하는 주제를 선택해주세요</Title>
      <SubjectContainer>
        {data.map((d: SubjectType, index) => (
          <Subject key={index} subject={d}></Subject>
        ))}
      </SubjectContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 600px;
  height: 90%;
  border-radius: 20px;
  overflow: hidden;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 50px;
  font-weight: 600;
  background-color: #201410;
  color: #ffffff;
`;
const SubjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: #dad26d;
`;
