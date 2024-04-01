import { Link } from "react-router-dom"
import "./style.css"

type Props = {
    text:string,
    className?:string,
    link:string
}

export default function Button({text, className, link}:Props) {
    return (
        <>
            <div className={"button-next" + " " + className}>
                <Link to={link}>{text}</Link>
            </div>
        </>
    )
}