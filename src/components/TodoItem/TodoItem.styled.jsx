import styled from "@emotion/styled";

export const ItemTodo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
  font-family: Calibri, sans-serif;
  border-bottom: 1px solid #eeca04;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  background-color: transparent;
  border: none;

  &:hover {
    scale: 1.2;
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 21px;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  color: #ededee;
`;

export const Priority = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #ffd700;
`;
