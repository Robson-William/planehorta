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
            </div>
        </>
    )
}