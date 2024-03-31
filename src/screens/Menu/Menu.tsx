import "./style.css";

export function Menu(){
    return (
        <>
            <nav className="nav-bar">
                <ul className="nav-bar-items">
                    <li id="brand">PlaneHorta</li>
                    <div id="about">
                        <li>Planejar</li>
                        <li>Sobre</li>
                    </div>
                </ul>

                <div className="nav-bar-block"></div>
            </nav>
        </>
    )
}