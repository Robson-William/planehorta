import Button from "../../../components/Button/Button"
import { BasicInput } from "../../../components/Input/BasicInput"
import "./style.css"

export function Area(){
    return (
        <>
            <div className="body area-mode">
                <p id="area-text">Informe as medidas do terreno</p>
                <form id="area-form">
                    <div>
                        <BasicInput type="number" id="input-width" placeholder="Largura" />
                        <span className="input-separator">X</span>
                        <BasicInput type="number" id="input-height" placeholder="Altura" />
                        <span className="input-separator">=</span>
                        <BasicInput type="number" id="input-area" placeholder="Area" isDisabled />
                    </div>

                    <div id="area-derivated-info">
                        <BasicInput type="number" id="input-cultivation-area" placeholder="0" isDisabled />
                        <BasicInput type="number" id="input-productive-units" placeholder="0" isDisabled />
                    </div>

                    <Button text="Continuar" link="/planejar/producao" />
                </form>
            </div>
        </>
    )
}