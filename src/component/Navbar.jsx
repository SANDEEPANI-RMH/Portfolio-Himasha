import Logo from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';


const Navbar = () => {
return <nav className="mb-20 flex intems-center justify-between py-2">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={Logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                 <a href='https://www.linkedin.com/in/himasha-ranasinghe-913878271/'><FaLinkedin/></a>   
                 <a href='https://github.com/SANDEEPANI-RMH'> <FaGithub/></a>  
                  <a href='#'> <FaInstagram/></a> 
                  <a href='#'> <FaEnvelope/></a>
                    </div>
     </nav>
}

export default Navbar;