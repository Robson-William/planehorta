type Props = {
    className?: string
}

export function CheckboxInput({className}:Props) {
    return (
        <>
            <div className={"custom-checkbox-container" + " " + className}>
                <input type="checkbox" id="hortalica1" value="Alface" className="custom-input-checkbox"/>
                <label htmlFor="hortalica1">Alface</label>
            </div>
        </>
    )
}