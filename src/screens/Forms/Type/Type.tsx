import Button from "../../../components/Button/Button"
import "./style.css"

export function Type(){
    return (
        <>
            <div className="body type-mode">
                <p id="type-title">Tipo de produção:</p>

                <div id="type-items">
                    <form>
                        <label className="type-checkbox-variation">
                            <input type="radio" id="producao-empurrada" name="production-type"/>
                            <span>Produção empurrada</span>
                        </label>

                        <div className="type-checkbox-variation">
                            <input type="radio" id="producao-puxada" name="production-type"/>
                            <label htmlFor="producao-puxada">Produção puxada</label>
                        </div>
                        
                    </form>
                    
                    <Button text="Continuar" link="/planejar/modelo"/>
                </div>
            </div>
        </>
    )
}