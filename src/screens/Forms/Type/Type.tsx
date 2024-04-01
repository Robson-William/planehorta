import Button from "../../../components/Button/Button"
import { CheckboxInput } from "../../../components/Input/CheckboxInput"
import "./style.css"

export function Type(){
    return (
        <>
            <div className="body type-mode">
                <p id="type-title">Tipo de produção:</p>

                <div id="type-items">
                    <CheckboxInput className="type-checkbox-variation"/>
                    <CheckboxInput className="type-checkbox-variation"/>
                    <Button text="Continuar"/>
                </div>
            </div>
        </>
    )
}