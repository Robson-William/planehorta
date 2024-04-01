import "./style.css"

type Props = {
    type: string,
    id: string,
    placeholder: string
    isDisabled?: boolean
}

export function Input({type, id, placeholder, isDisabled}:Props){
    return (
        <>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
            />
        </>

    )
}