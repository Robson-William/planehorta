import { usePlanning } from "../../context/planning"
import "./style.css"

export function Model(){
    const {measures, production, type} = usePlanning()
    const keys = [...Array(Math.trunc(measures.UP)).keys()]

    console.log(measures, production, type)

    return (
        <>
            <div className="body model-mode">
                <span id="model-title">Modelo</span>
                
                <div id="model">
                    {
                    keys.map((item) => (
                        <div className="productive-unit" id={"" + item} key={item}>

                        </div>
                        ))
                    }

                </div>

                <span id="production-title">Produção</span>

                <table className="table">
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Unidade</th>
                            <th>Produção total</th>
                        </tr>
                        <tr>
                            <th>
                                <div className="color-square"></div>
                                Alface
                            </th>
                            <th>80</th>
                            <th>80</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}