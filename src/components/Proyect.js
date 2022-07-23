import "./Proyect.css";
import {useState} from "react";

export default function Proyect({end, proyectoImg, proyectoUrlDeploy, proyectoUrlGithub, proyectoDescription}){

    let [isHovering, setIsHovering] = useState(false);    

    let onMouseOverHandler = (e) => {
        setIsHovering(true);
    }

    return(
        <a href={proyectoUrlDeploy} target="_blank" rel="noreferrer">
        <div className={end ? "Proyect end" : "Proyect"}>
            <img className="imgproy"alt="img" src={proyectoImg} width="355" height="196"
            onMouseOver={onMouseOverHandler}></img>
            {isHovering && <p className="hovering">{proyectoDescription}</p>}
        </div>
        </a>
    )
}