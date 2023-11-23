import styled from "@emotion/styled";

export const ListTodos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 385px;
  max-height: 420px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
`;
