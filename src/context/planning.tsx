import React, { createContext, useContext, useState } from "react";
import { Plant } from "../mocks/plants";

type Measures = {
    width:number,
    length:number,
    UP:number
}

// type Production = {
//     name: string,
//     production:number, 
//     productiveUnits:number,
//     plantingDate:string
// }

type Planning = {
    measures: Measures,
    production: Plant[],
    type: string,
    assignMeasures(width:number, length:number):void,
    assignType(type:string):void,
    assignProduction(production: Plant[]):void
}

type Props = {
    children:React.ReactNode
}

const PlanningContext = createContext({} as Planning)

export function PlanningProvider({children}:Props){
    const [measures, setMeasures] = useState<Measures>({width: 0, length: 0, UP: 0})
    const [type, setType] = useState<string>("");
    const [production, setProduction] = useState<Plant[]>([])

    function assignMeasures(width:number, length:number){
        if(width || length != null){
            setMeasures({
                width: width,
                length: length,
                UP: Math.trunc(((width * length) * 0.75) / 1.44)
            })
        }
    }

    function assignType(type:string){
        if(type != ""){
            setType(type)
        }
    }

    function assignProduction(production: Plant[]){
        if(production.length != 0){
            setProduction(production)
        }
    }

    return (
        <PlanningContext.Provider value={{measures, type, production, assignMeasures, assignProduction, assignType}}>
            {children}
        </PlanningContext.Provider>
    )
}

export function usePlanning(){
    const context = useContext(PlanningContext)

    return context;
}