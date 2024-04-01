import { Link } from "react-router-dom";
import "./style.css";

export function Menu(){
    return (
        <>
            <nav className="nav-bar">
                <ul className="nav-bar-items">
                    <Link id="brand" to={"/"}>PlaneHorta</Link>
                    <div id="about">
                        <Link to={"/planejar/area"}>Planejar</Link>
                        <Link to={"#"}>Sobre</Link>
                    </div>
                </ul>

                <div className="nav-bar-block"></div>
            </nav>
        </>
    )
}