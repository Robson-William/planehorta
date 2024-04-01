import "./style.css"

type Props = {
    text:string
}

export default function Button({text}:Props) {
    return (
        <>
            <button className="button-next">
                <span>{text}</span>
            </button>
        </>
    )
}