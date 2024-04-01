import { ReactNode } from "react"
import "./style.css";

type Props = {
    children: ReactNode,
    text:string
}

export function Dropdown({children, text}:Props){
    return (
        <>
                <div className="custom-dropdown">
                    <span id="custom-dropdown-title">{text}</span>

                    <div className="custom-dropdown-content">
                        {children}
                    </div>
                </div>
        </>
    )
}