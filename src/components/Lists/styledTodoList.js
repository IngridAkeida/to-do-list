import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-family: sans-serif;
  color: #58181f;
  margin: 0;
  padding: 20px;
  text-shadow: 1px 1px 0px #ff0000;
`

export const StyledInput = styled.input`
  background-color: #fad0c4;
  text-indent: 10px;
  border: none;
  height: 30px;
  width: 50%;
  border-radius : 5px 0 0 5px;

  @media (max-width: 600px) {
    width: 55%;
  }
`
export const StyledAdd = styled.button`
  background-color: #58181f;
  font-weight: bold;
  color: #fff;
  border: none;
  height: 32px;
  width: 10%;
  border-radius : 0 5px 5px 0;

  &:hover {
    color: #58181f;
    background-color: #fff;
  }
  &:active{
    color: #fff;
    background-color: #fff;
  }
  @media (max-width: 600px) {
    width: 15%;
  }
`
export const StyledTodoList = styled.ul`
  padding: 0;
  color: #58181f;
  font-weight: 700;
  background-color: #ff8177;
  overflow: hidden;
  margin: 30px auto 0;
  width: 60%;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const StyledTodoItem = styled.li`
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledTodoText = styled.p`
  width: 80%;
  word-wrap: break-word;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledTodoDivButton = styled.div`
  width: 15%; 
`;

export const StyledTodoButton = styled.button`
  width: 50%;
  height: 25px;
  right: 50px;
  border: none;
  border-radius: 5px;
  color: #58181f;
  cursor: pointer;
  background-color: #ffffff00;

  &:hover {
    color: #58181f;    
  }
  &:active{
    color: #fff;
  }
`;



