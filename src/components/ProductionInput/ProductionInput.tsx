import { ChangeEvent, useEffect, useState } from "react"
import { Plant } from "../../mocks/plants"

type Props = {
    plant:Plant,
    editValue:any
}

export function ProductionInput({plant, editValue}:Props){
    const [productionValue, setProductionValue] = useState<number>(plant.value)

    function handleProductionChange(e:ChangeEvent<HTMLInputElement>){
        setProductionValue(e.currentTarget.valueAsNumber)
    }

    useEffect(() => {
        editValue(plant.name, productionValue)
    }, [productionValue])

    return (
        <div className="list-production-info">
            <span className="hortalica-name">{plant.name}</span>
            <input 
                type="number"
                id="desired-production-value"
                value={productionValue}
                onChange={handleProductionChange}
                className="desired-production-input"
            />
            <span className="necessary-productive-units">{plant.value / plant.perUP}</span>
            <input 
                type="date"
                id="initial-date-to-plant"
                className="initial-date-input"
            />
        </div>
    )
}