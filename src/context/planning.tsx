import React, { createContext, useContext, useState } from "react";

type Measures = {
    width:number | undefined,
    length:number | undefined,
    UP:number | undefined
}

type Production = {
    name: string,
    production:number, 
    productiveUnits:number,
    plantingDate:string
}

type Planning = {
    measures: Measures | undefined
    production: Production[],
    type: string | undefined,
    assignMeasures(width:number, length:number):void,
    assignType(type:string):void,
    assignProduction():void
}

type Props = {
    children:React.ReactNode
}

const PlanningContext = createContext({} as Planning)

export function PlanningProvider({children}:Props){
    const [measures, setMeasures] = useState<Measures>()
    const [type, setType] = useState<string>("");
    const [production, setProduction] = useState([])

    function assignMeasures(width:number, length:number){
        if(width || length != null){
            setMeasures({
                width: width,
                length: length,
                UP: (width * length) / 1.44
            })
        }
    }

    function assignType(type:string){
        if(type != ""){
            setType(type)
        }
    }

    function assignProduction(){

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