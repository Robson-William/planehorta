type Props = {
    className?: string,
    plant?: {},
    name:string,
    onClick(e:React.MouseEvent<HTMLInputElement>):void
}

export function CheckboxInput({className, onClick, name}:Props) {
    return (
        <>
            <div className={"custom-checkbox-container" + " " + className}>
                <input type="checkbox" name="hortalica" value={name} className="custom-input-checkbox" onClick={(e) => onClick(e)}/>
                <label htmlFor="hortalica">{name}</label>
            </div>
        </>
    )
}