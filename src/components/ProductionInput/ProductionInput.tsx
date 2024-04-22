import { ChangeEvent, useEffect, useState } from "react"
import { Plant } from "../../mocks/plants"

type Props = {
    plant:Plant,
    editValue(name:string, newValue:number):void,
    editDate(name:string, newValue:string):void
}

export function ProductionInput({plant, editValue, editDate}:Props){
    const [productionValue, setProductionValue] = useState<number>(plant.value)
    const [date, setDate] = useState<string>("");

    function handleProductionChange(e:ChangeEvent<HTMLInputElement>){
        setProductionValue(e.currentTarget.valueAsNumber)
    }

    function handleDateChange(e:ChangeEvent<HTMLInputElement>){
        setDate(e.currentTarget.value)
    }

    useEffect(() => {
        editValue(plant.name, productionValue);
    }, [productionValue])

    useEffect(() => {
        editDate(plant.name, date);
    }, [date])

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
            <span className="necessary-productive-units">{plant.necessaryUP}</span>
            <input 
                type="date"
                id="initial-date-to-plant"
                className="initial-date-input"
                value={date}
                onChange={handleDateChange}
            />
        </div>
    )
}