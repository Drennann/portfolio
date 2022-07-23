import "./NavBar.css";
import { FaBars } from 'react-icons/fa';

export default function NavBar (){


    let handleOnClick =() => {
        let h = document.getElementsByTagName("ul");
        h[0].classList.toggle("isVisible");
    }

    let sc = (id) => {
        let res = document.getElementById(id);
        res.scrollIntoView({
            behavior: "smooth",
            block:"center" ,
            inline: "nearest"
        });
    }

    return(
        <div className="NavBar">
            <p>
                Portfolio
            </p>
            <ul className="menu isVisible">
                <FaBars className="hamburguer" onClick={handleOnClick} />
                <li onClick={() => sc("#HOME")}>
                    Home
                </li>
                <li onClick={() => sc("#ABOUTID")}>
                    About
                </li>
                <li onClick={() => sc("#PROYECTSID")}>
                    Proyects
                </li>
                <li onClick={() => sc("#TECHID")}>
                    Technologies
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/federicoachaval/">Contact me</a>
                </li>
            </ul>
        </div>
    )
}