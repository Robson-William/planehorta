import { Link } from "react-router-dom"
import "./style.css"

type Props = {
    text:string,
    className?:string,
    link:string,
    handleClick?():void
    isActive:boolean
}

export default function Button({text, className, link, handleClick, isActive}:Props) {
    return (
        <>
            <div className={"button-next" + " " + className} onClick={handleClick} style={isActive ? {}: {pointerEvents: "none", opacity: "50%"}}>
                <Link to={link}>{text}</Link>
            </div>
        </>
    )
}