import classes from "./Contact.module.css";
import {icons} from 'react-icons';
import{FaInstagramSquare,FaGithub,FaLinkedin} from "react-icons/fa";
const handleURL =(URL) => {
  return ()=> window.open(URL,"_blank")
}
const Contact = ()=>
{
  return(
    <div className={classes.Contact}id="contact">
      <div className={classes.ContactIcons}>
      <FaInstagramSquare color="white" size='30px' style={{padding:'1%'}}
      onClick={handleURL('https://www.instagram.com/its_me_selvakumar?r=nametag')}/>
      <FaLinkedin color="white" size='30px' style={{padding:'1%'}}
      onClick={handleURL('https://www.linkedin.com/in/selvakumar-balasubramani-43b919201')}/>
      <FaGithub color="white" size='30px' style={{padding:'1%'}}
      onClick={handleURL('https://github.com/Selvakumar-18')}/>

      
      
    </div>
    </div>
  );
}
export default Contact;