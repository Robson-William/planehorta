import { useEffect, useState } from "react"
import Button from "../../../components/Button/Button"
import { BasicInput } from "../../../components/Input/BasicInput"
import { usePlanning } from "../../../context/planning"
import "./style.css"

export function Area(){
    const {measures, assignMeasures} = usePlanning()
    const [width, setWidth] = useState<number | undefined>();
    const [length, setLength] = useState<number | undefined>();
    const [area, setArea] = useState<number | undefined>()

    useEffect(() => {
        if(width && length != undefined){
            assignMeasures(width, length)
            setArea(width * length)
        }
    }, [width, length])

    return (
        <>
            <div className="body area-mode">
                <p id="area-text">Informe as medidas do terreno</p>
                <form id="area-form">
                    <div>
                        <BasicInput
                            type="number"
                            id="input-width"
                            placeholder="Largura"
                            onChange={e => setWidth(e.currentTarget.value)}
                        />
                        <span className="input-separator">X</span>
                        <BasicInput
                            type="number"
                            id="input-height"
                            placeholder="Altura"
                            onChange={e => setLength(e.currentTarget.value)}
                        />
                        <span className="input-separator">=</span>
                        <BasicInput type="number" id="input-area" placeholder="Area" value={area ? area : undefined} disabled />
                    </div>

                    <div id="area-derivated-info">
                        <BasicInput type="number" id="input-cultivation-area" placeholder="0" disabled />
                        <BasicInput type="number" id="input-productive-units" placeholder="0" disabled />
                    </div>

                    <Button text="Continuar" link="/planejar/producao" />
                </form>
            </div>
        </>
    )
}