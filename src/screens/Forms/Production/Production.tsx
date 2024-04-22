import { ChangeEvent, useEffect, useState } from "react"
import Button from "../../../components/Button/Button"
import { Dropdown } from "../../../components/Dropdown/Dropdown"
import { CheckboxInput } from "../../../components/Input/CheckboxInput"
import { ProductionInput } from "../../../components/ProductionInput/ProductionInput"
import { usePlanning } from "../../../context/planning"
import { Plant, plants } from "../../../mocks/plants"
import "./style.css"

export function Production(){
    const {measures, production, assignProduction} = usePlanning()
    const [selection, setSelection] = useState<Plant[]>([]);
    const [remainingUP, setRemainingUP] = useState<number>(measures!.UP);

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
                    value: newValue,
                    necessaryUP: newValue / selected.perUP
                }
                console.log("Updated:", updatedProduction)
                return updatedProduction
            }

            return selected
        })

        setSelection([...newList])
    }

    function handleDateChange(name:string, newValue:string){
        const newList = selection.map((selected) => {
            if(selected.name === name){
                const updatedProduction = {
                    ...selected,
                    firstPlant: newValue
                }

                return updatedProduction
            }

            return selected
        })

        setSelection([...newList])
    }

    function handleButtonClick(){
        assignProduction(selection)
    }

    function handleRemainingUP(){
        let necessaryUPSum: number = 0;

        for(let i = 0; i < selection.length; i++){
            necessaryUPSum += selection[i].necessaryUP;
        }

        setRemainingUP(measures!.UP - necessaryUPSum);
    }

    useEffect(() => {
        handleRemainingUP();
    }, [selection])

    return (
        <>
            <div className="body production-mode">
                <Dropdown text="Selecionar Hortaliça">
                    {plants.map((plant) => (
                        <CheckboxInput name={plant.name} onClick={handleClick} key={plant.name}/>
                    ))}
                </Dropdown>
                
                {selection.map((selected) => (
                    <ProductionInput plant={selected} key={selected.name} editValue={handleProductionChange} editDate={handleDateChange}/>
                ))}

                <div id="production-items">
                    <div className="info-container">
                        <span>
                            {remainingUP}
                        </span>
                    </div>

                    <Button text="Continuar" link="/planejar/modelo" handleClick={handleButtonClick} isActive={selection.length != 0 ? true : false}/>
                </div>
            </div>
        </>
    )
}