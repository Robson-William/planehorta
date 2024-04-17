import { Link } from "react-router-dom"
import "./style.css"

type Props = {
    text:string,
    className?:string,
    link:string,
    handleClick():void
}

export default function Button({text, className, link, handleClick}:Props) {
    return (
        <>
            <div className={"button-next" + " " + className} onClick={handleClick}>
                <Link to={link}>{text}</Link>
            </div>
        </>
    )
}