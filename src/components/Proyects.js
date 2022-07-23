import "./Proyects.css";
import Proyect from "./Proyect.js"

export default function Proyects({dataaos}){
    console.log(dataaos)
    return(
        <div className="Proyects" id="#PROYECTSID">
            <Proyect proyectoDescription = "video game app, you can search different league of legends characters. " proyectoImg={"leagueapp.png"} proyectoUrlDeploy="https://drennann.github.io/LeagueApp" proyectoUrlGithub="https://github.com/Drennann/LeagueApp"/>
            <Proyect end="end" proyectoDescription = "Online to-do list application, connected to a database and with a backend included" proyectoImg={"todo.png"} proyectoUrlDeploy="https://mern-stack-2-delpan.herokuapp.com/" proyectoUrlGithub="https://dashboard.heroku.com/apps/mern-stack-2-delpan"/>
            <Proyect proyectoDescription = "A simplified chess game. react, javascript, html and css were used" proyectoImg={"chess.png"} proyectoUrlDeploy="https://drennann.github.io/Chess/" proyectoUrlGithub="https://github.com/Drennann/Chess"/>
            <Proyect end="end" proyectoDescription = "Table that receives crypto prices in real time" proyectoImg={"crypto.png"} proyectoUrlDeploy="https://drennann.github.io/cryptoapp/" proyectoUrlGithub="https://github.com/Drennann/cryptoapp"/>
        </div>
    )
}