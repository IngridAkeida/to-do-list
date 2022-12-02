import { StyledFooter } from "./styledFooter";
import {
        FaRegGrinBeam,
        FaLinkedin,
        FaGithub,
} from 'react-icons/fa';


function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>Study project to learn some features of LocalStorage and work on some more tools, Then you can use todolist to close the page and the data it will be there If you reload or close the page <FaRegGrinBeam/> </li>
        <li></li>
      </ul>
      <h2>About me:</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ingrid-sanches/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ingrid-sanches/" target="_blank" rel="noreferrer"><FaGithub/></a>
        </li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;