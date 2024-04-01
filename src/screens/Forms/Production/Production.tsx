import Button from "../../../components/Button/Button"
import { Dropdown } from "../../../components/Dropdown/Dropdown"
import { CheckboxInput } from "../../../components/Input/CheckboxInput"
import "./style.css"

export function Production(){
    return (
        <>
            <div className="body production-mode">
                <Dropdown text="Selecionar Hortaliça">
                    <CheckboxInput />
                </Dropdown>

                <div className="list-production-info">
                    <span className="hortalica-name">Alface</span>
                    <input 
                        type="number"
                        id="desired-production-value"
                        value={16}
                        className="desired-production-input"
                    />
                    <span className="necessary-productive-units">1</span>
                    <input 
                        type="date"
                        id="initial-date-to-plant"
                        className="initial-date-input"
                    />
                </div>

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