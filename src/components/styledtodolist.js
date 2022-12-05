import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-family: sans-serif;
  color: #58181f;
`

export const StyledInput = styled.input`
  background-color: #fad0c4;
  text-indent: 10px;
  border: none;
  height: 30px;
  width: 50%;
  border-radius : 5px 0 0 5px;
  @media (max-width: 600px) {
      width: 70%;
    }
`
export const StyledAdd = styled.button`
  background-color: #58181f;
  font-weight: bold;
  color: #fff;
  border: none;
  height: 32px;
  border-radius : 0 5px 5px 0;

  &:hover {
    color: #58181f;
    background-color: #fff;
  }
  &:active{
    color: #fff;
    background-color: #fff;
  }
`
export const StyledTodoList = styled.ul`
  list-style-type: decimal;
  color: #58181f;
  font-weight: 700;
  background-color: #ff8177;
  margin: 0;
  overflow: hidden;
  margin: 48px auto 0;
  width: 60%;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledTodoText = styled.p`
 padding: 0 10px;
 left: 10px; 
`;

export const StyledTodoButton = styled.button`
  padding: 0;
  margin: 16px 0;
  width: 45px;
  height: 25px;
  right: 50px;
  position: absolute;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #58181f;
  cursor: pointer;

  &:hover {
    color: #58181f;
    background-color: #fff;
  }
  &:active{
    color: #fff;
    background-color: #fff;
  }
`;

