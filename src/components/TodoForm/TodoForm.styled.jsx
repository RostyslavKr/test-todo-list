import styled from "@emotion/styled";

export const FormTodo = styled.form`
  display: flex;
  gap: 14px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 182px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  font-size: 18px;
  font-weight: 300;
  color: #545454;
  &:focus {
    border: 2px solid #ffd700;
    outline: none;
  }
`;

export const Select = styled.select`
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 300;
  color: #545454;
  width: 64px;
`;

export const Button = styled.button`
  font-size: 20px;
  color: #ffd700;
  padding: 6px 30px;
  background-color: transparent;
  border: 2px solid #ffd700;
  border-radius: 5px;
  &:hover {
    background-color: #b9babb;
    opacity: 0.8;
    boreder-color: #b89f15;
  }
  &:focus {
    background-color: #b9babb;
    opacity: 0.8;
    boreder-color: #b89f15;
  }
`;
