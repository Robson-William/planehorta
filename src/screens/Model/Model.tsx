import { usePlanning } from "../../context/planning"
import "./style.css"

export function Model(){
    const {measures, production, type} = usePlanning()
    const keys = [...Array(Math.trunc(measures.UP)).keys()]

    const modelStyle = {
        display: "flex",
        flexFlow: "column wrap",
        backgroundColor: "#2AAF74",
        width: "1000px",
        height: "505px",
        marginLeft: "97px",
        padding: "27px 55px",
        borderRadius: "10px"
    }

    let square = 0

    if(measures.UP > 259){
        square = 7000 / measures.UP;
    } else {
        square = 3400 / measures.UP 
    }
    

    const productiveUnitStyle = {
        backgroundColor: "#E19955",
        width: square + "px",
        height: square + "px",
        border: "1px solid #000000"
    }

    console.log(measures, production, type)

    return (
        <>
            <div className="body model-mode">
                <span id="model-title">Modelo</span>
                
                <div id="model">
                    {
                    keys.map((item) => (
                        <div style={productiveUnitStyle} id={"" + item} key={item}>

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