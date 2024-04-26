import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PageOne = () => {
  const navigate = useNavigate();
  return (
    <StartContainer onClick={() => navigate("/burger/two")}>
      <div>햄버거를 선택하셨습니다.</div>
      <div>화면을 터치해 주세요. 시작하겠습니다.</div>
    </StartContainer>
  );
};
const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e9a7a7;
  color: #ffffff;
  width: 100%;
  height: 100%;
  font-size: 36px;
  cursor: pointer;
`;
