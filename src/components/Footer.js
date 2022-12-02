import { StyledFooter } from "./styledFooter";
import {
        FaRegGrinBeam,
        FaLinkedin,
        FaGithub,
} from 'react-icons/fa';


function Footer() {
  return (
    <StyledFooter>
      <p>sjshjhsj</p>
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