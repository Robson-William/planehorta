import { useState } from "react"
import Button from "../../../components/Button/Button"
import "./style.css"
import { usePlanning } from "../../../context/planning";

export function Type(){
    const [type, setType] = useState<string>("");
    const {assignType} = usePlanning();

    function handleButtonClick(){
        assignType(type)
    }

    return (
        <>
            <div className="body type-mode">
                <p id="type-title">Tipo de produção:</p>

                <div id="type-items">
                    <form>
                        <div className="type-checkbox-variation">
                            <input
                                type="radio"
                                value="push-production"
                                name="production-type"
                                onChange={(e) => setType(e.currentTarget.value)}
                            />
                            <label htmlFor="push-production">Produção empurrada</label>
                        </div>

                        <div className="type-checkbox-variation">
                            <input
                                type="radio"
                                value="pull-production"
                                name="production-type"
                                onChange={(e) => setType(e.currentTarget.value)}
                            />
                            <label htmlFor="pull-production">Produção puxada</label>
                        </div>
                        
                    </form>
                    
                    <Button text="Continuar" link="/planejar/producao" handleClick={handleButtonClick} isActive={type != "" ? true : false}/>
                </div>
            </div>
        </>
    )
}