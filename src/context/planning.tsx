import React, { createContext, useContext, useState } from "react";
import { Plant } from "../mocks/plants";

type Measures = {
    width:number,
    height:number,
    UP:number
}

// type Production = {
//     name: string,
//     production:number, 
//     productiveUnits:number,
//     plantingDate:string
// }

type Planning = {
    measures: Measures | undefined,
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
    const [measures, setMeasures] = useState<Measures>()
    const [type, setType] = useState<string>("");
    const [production, setProduction] = useState<Plant[]>([])

    function assignMeasures(width:number, height:number){
        if(width || length != null){
            setMeasures({
                width: width,
                height: height,
                UP: Math.trunc(((width * height) * 0.75) / 1.44)
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