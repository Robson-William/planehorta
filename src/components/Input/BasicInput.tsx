import "./style.css"

type Props = {
    type: string,
    id: string,
    placeholder: string
    isDisabled?: boolean
}

export function BasicInput({type, id, placeholder, isDisabled}:Props){
    return (
        <>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                className="basic-input"
            />
        </>

    )
}