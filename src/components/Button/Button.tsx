import "./style.css"

type Props = {
    text:string,
    className?:string
}

export default function Button({text, className}:Props) {
    return (
        <>
            <button className={"button-next" + " " + className}>
                <span>{text}</span>
            </button>
        </>
    )
}