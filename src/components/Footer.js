import { 
  StyledFooter,
  StyledAboutProject,
  StyledAbout,
  StyledLink,
  StyledItensList,
  StyledItensLink,
  StyledItensCopy,
  StyledItensC
  
} from "./styledFooter";
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';


function Footer() {
  return (
    <StyledFooter>
      <div>
        <StyledAboutProject>Study project to learn some features of LocalStorage and work on some more tools, Then you can use todolist to close the page and the data it will be there If you reload or close the page.</StyledAboutProject>
        <StyledAbout>About me:</StyledAbout>
        <StyledLink>
          <StyledItensList>
            <StyledItensLink href="https://www.linkedin.com/in/ingrid-sanches/" target="_blank" rel="noreferrer"><FaLinkedin/></StyledItensLink>
          </StyledItensList>
          <StyledItensList>
            <StyledItensLink href="https://www.linkedin.com/in/ingrid-sanches/" target="_blank" rel="noreferrer"><FaGithub/></StyledItensLink>
          </StyledItensList>
        </StyledLink>
      </div>
      <div>
        <StyledItensCopy>Copyright &copy; 2022 <StyledItensC href="https://github.com/IngridAkeida/to-do-list" target="_blank" rel="noreferrer">IngridAkeida</StyledItensC>. 
        <br/>
        All Rights Reserved
        </StyledItensCopy>
      </div>
   
    </StyledFooter>
  );
}

export default Footer;