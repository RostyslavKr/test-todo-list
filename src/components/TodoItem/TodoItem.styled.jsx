import styled from "@emotion/styled";

export const ItemTodo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeca04;
  padding-bottom: 6px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 30px;
  padding: 0;

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
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #ffd700;
  margin: 0;
`;
