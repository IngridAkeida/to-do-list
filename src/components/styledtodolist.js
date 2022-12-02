import styled from "styled-components";

export const StyledTodoList = styled.ul`
  
  list-style-type: decimal;
  overflow: hidden;
  padding: 10px 0 20px 0;
  margin: 48px auto 0;
  width: 80%;
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
 border: 1px red solid;
 
`;

export const StyledTodoButton = styled.button`
  padding: 0;
  margin: 16px 0;
  width: 20px;
  height: 20px;
  right: 10px;
  position: absolute;
`;

