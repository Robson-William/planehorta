import { useEffect, useState, ChangeEvent } from "react"
import Button from "../../../components/Button/Button"
import { BasicInput } from "../../../components/Input/BasicInput"
import { usePlanning } from "../../../context/planning"
import "./style.css"

export function Area(){
    const {measures, assignMeasures} = usePlanning()
    const [width, setWidth] = useState<number | undefined>();
    const [height, setHeight] = useState<number | undefined>();
    const [area, setArea] = useState<number | undefined>()

    function handleWidthChange(e:ChangeEvent<HTMLInputElement>){
        setWidth(e.currentTarget.valueAsNumber)
    }

    function handleHeightChange(e:ChangeEvent<HTMLInputElement>){
        setHeight(e.currentTarget.valueAsNumber)
    }

    useEffect(() => {
        if(width && height != undefined){
            assignMeasures(width, height)
            setArea(width * height)
        }
    }, [width, height])

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
                            onChange={handleWidthChange}
                        />
                        <span className="input-separator">X</span>
                        <BasicInput
                            type="number"
                            id="input-height"
                            placeholder="Altura"
                            value={measures ? measures.height : height}
                            onChange={handleHeightChange}
                        />
                        <span className="input-separator">=</span>
                        <BasicInput type="number" id="input-area" placeholder={area ? area : "Area"} disabled />
                    </div>

                    <div id="area-derivated-info">
                        <BasicInput type="number" id="input-cultivation-area" placeholder="0" disabled />
                        <BasicInput type="number" id="input-productive-units" placeholder="0" disabled />
                    </div>

                    <Button text="Continuar" link="/planejar/tipo" isActive={measures?.width && measures.height ? true : false}/>
                </form>
            </div>
        </>
    )
}