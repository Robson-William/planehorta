import "./style.css"

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