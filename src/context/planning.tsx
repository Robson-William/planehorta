import React, { createContext, useContext, useState } from "react";

type Measures = {
    width:number | undefined,
    length:number | undefined
}

type Planning = {
    measures: Measures | undefined
    plants: never[],
    type: string | undefined,
    assignMeasures(width:number, length:number):void,
    assignType(type:string):void,
    assignPlants():void
}

type Props = {
    children:React.ReactNode
}

const PlanningContext = createContext({} as Planning)

export function PlanningProvider({children}:Props){
    const [measures, setMeasures] = useState<Measures>()
    const [type, setType] = useState<string>("");
    const [plants, setPlants] = useState([])

    function assignMeasures(width:number, length:number){
        if(width || length != null){
            setMeasures({
                width: width,
                length: length
            })
        }
    }

    function assignType(type:string){
        if(type != ""){
            setType(type)
        }
    }

    function assignPlants(){

    }

    return (
        <PlanningContext.Provider value={{measures, type, plants, assignMeasures, assignPlants, assignType}}>
            {children}
        </PlanningContext.Provider>
    )
}

export function usePlanning(){
    const context = useContext(PlanningContext)

    return context;
}