import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #58181f;
  height: auto;
  width: 100%;
  padding: 10px 0;
  color: #fad0c4;
`
export const StyledAboutProject = styled.p`
  margin: auto;
  width: 70%;
`
export const StyledAbout = styled.h2`
  margin: auto;
  padding: 5px 0;
  font-size: large;
`
export const StyledLink = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`
export const StyledItensList = styled.li`
  margin: 0 10px;
`
export const StyledItensLink = styled.a`
  color: #fff;
  font-size: 30px;
  &:hover {
    color: #fff;
    font-weight: bold;
    font-size: 31px;
  }
  &:active{
    color: #fad0c4;  
  }
`
export const StyledItensCopy = styled.p`
  margin: 0;
  color: inherit;
  font-size: small;
  font-style: italic;
`
export const StyledItensC = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #fff;
    font-weight: bold;
  }
  &:active{
    color: #fad0c4;  
  }
`
