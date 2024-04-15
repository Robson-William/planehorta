import { ChangeEvent, useEffect, useState } from "react"
import Button from "../../../components/Button/Button"
import { Dropdown } from "../../../components/Dropdown/Dropdown"
import { CheckboxInput } from "../../../components/Input/CheckboxInput"
import { ProductionInput } from "../../../components/ProductionInput/ProductionInput"
import { usePlanning } from "../../../context/planning"
import { Plant, plants } from "../../../mocks/plants"
import "./style.css"

export function Production(){
    const [selection, setSelection] = useState<Plant[]>([]);
    const {production} = usePlanning()

    function handleClick(e:ChangeEvent<HTMLInputElement>){
        const value = e.currentTarget.value

        let newList = selection;

        switch (e.currentTarget.checked){
            case true:
                if(selection.length != 0){
                    plants.map((plant) => {
                        if(plant.name === value){
                            if(!selection.find((plant) => plant.name === value)){
                                newList.push(plant)
                            }
                        }
                    })
                }else {
                    plants.map((plant) => {
                        if(plant.name === value){
                            newList.push(plant)
                        }
                    })
                }
                break;
            case false:
                newList = selection.filter((plant) => plant.name != value)
                break;
        }

        setSelection([...newList])
    }

    function handleProductionChange(name:string, newValue:number){
        const newList = selection.map((selected) => {
            if(selected.name === name){
                const updatedProduction = {
                    ...selected,
                    value: newValue
                }

                return updatedProduction
            }

            return selected
        })

        setSelection([...newList])
    }

    return (
        <>
            <div className="body production-mode">
                <Dropdown text="Selecionar Hortaliça">
                    {plants.map((plant) => (
                        <CheckboxInput name={plant.name} onClick={handleClick} key={plant.name}/>
                    ))}
                </Dropdown>
                
                {selection.map((selected) => (
                    <ProductionInput plant={selected} key={selected.name} editValue={handleProductionChange}/>
                ))}

                <div id="production-items">
                    <div className="info-container">
                        <span>15</span>
                    </div>

                    <Button text="Continuar" link="/planejar/tipo" />
                </div>
            </div>
        </>
    )
}