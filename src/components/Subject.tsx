import { Link } from "react-router-dom";
import styled from "styled-components";

export interface SubjectType {
  icon: string;
  name: string;
  path: string;
}
interface Subject {
  subject: SubjectType;
}

export const Subject = ({ subject }: Subject) => {
  return (
    <Link to={`/${subject.path}/one`}>
      <Container>
        <Icon>{subject.icon}</Icon>
        <Name>{subject.name}</Name>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  font-size: 100px;
`;
const Name = styled.div`
  font-size: 32px;
`;
