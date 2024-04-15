import "./style.css"

type Props = {
    type: string,
    id: string,
    placeholder: string,
    isDisabled?: boolean
}

export function BasicInput({...rest}){
    return (
        <>
            <input
                className="basic-input"
                {...rest}
            />
        </>

    )
}