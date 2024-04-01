import Button from "../../../components/Button/Button"
import { Input } from "../../../components/Input/Input"
import "./style.css"

export function Area(){
    return (
        <>
            <div className="body area-mode">
                <p id="area-text">Informe as medidas do terreno</p>
                <form id="area-form">
                    <div>
                        <Input type="number" id="input-width" placeholder="Largura" />
                        <span className="input-separator">X</span>
                        <Input type="number" id="input-height" placeholder="Altura" />
                        <span className="input-separator">=</span>
                        <Input type="number" id="input-area" placeholder="Area" isDisabled />
                    </div>

                    <div id="area-derivated-info">
                        <Input type="number" id="input-cultivation-area" placeholder="0" isDisabled />
                        <Input type="number" id="input-productive-units" placeholder="0" isDisabled />
                    </div>

                    <Button text="Continuar" />
                </form>
            </div>
        </>
    )
}