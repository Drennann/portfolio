import "./Contact.css";
import { FaLinkedin , FaGithub} from 'react-icons/fa';

export default function Contact (){
    return(
        <div className="Contact">
            <div>
            <a href="https://www.linkedin.com/in/federicoachaval/"><FaLinkedin className="contact"/></a>
            <a  href="https://github.com/Drennann"><FaGithub className="contact"/></a>
            </div>
        </div>
    )
}