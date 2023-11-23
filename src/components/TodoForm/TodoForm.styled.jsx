import styled from "@emotion/styled";

export const FormTodo = styled.form`
  display: flex;
  gap: 14px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 300;
  padding-left: 10px;
  width: 182px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #545454;
  border: none;
  border-radius: 3px;

  &:focus {
    border: 2px solid #ffd700;
    outline: none;
  }
`;

export const Select = styled.select`
  font-size: 18px;
  font-weight: 300;
  width: 64px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #545454;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 6px 30px;
  background-color: transparent;
  color: #ffd700;
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
