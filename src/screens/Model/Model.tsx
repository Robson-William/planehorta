import { useEffect, useState } from "react"
import { usePlanning } from "../../context/planning"
import "./style.css"

export function Model(){
    const {measures, production, type} = usePlanning()
    const [keys, setKeys] = useState<number[]>([]);

    let square = 0

    if(measures!.UP > 200){
        square = 7000 / measures!.UP;
    } else {
        square = 3400 / measures!.UP 
    }
    

    const productiveUnitStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E19955",
        width: square + "px",
        height: square + "px",
        border: "1px solid #000000",
        fontSize: "16px",
        fontWeight: "bold"
    }

    
    let necessaryUPSum: number;

    function handleRemainingUP(){
        necessaryUPSum = 0;

        production.map((product) => {
            necessaryUPSum += product.necessaryUP;
        })

        let keysPlaceholder:number[] = [];

        if(type === "pull-production"){
            keysPlaceholder = [...Array(Math.trunc(measures!.UP - necessaryUPSum)).keys()]
        } else {
            keysPlaceholder = [...Array(Math.trunc(measures!.UP - (necessaryUPSum * 5))).keys()]
        }


        setKeys(keysPlaceholder);

    }

    useEffect(() => {
        handleRemainingUP();
    }, [])

    console.log(measures, production, type)

    return (
        <>
            <div className="body model-mode">
                <span id="model-title">Modelo</span>
                
                {type == "pull-production" &&
                    <div id="model">
                        {
                            production.map((product) => (
                                Array(product.necessaryUP).fill(1).map((i) => (
                                    <div style={{...productiveUnitStyle, ...{backgroundColor: product.color}}} id={"" + product.name} key={""+ product.name + i}>
                                        <span>{product.name}</span>
                                    </div>
                                ))
                            ))
                        }
                    

                        {
                            keys.map((item) => (
                                <div style={productiveUnitStyle} id={"" + item} key={item}>
                                    <span>Livre</span>
                                </div>
                            ))
                        }
                    </div>
                }

                {type == "push-production" &&
                    <div id="model">
                        {
                            production.map((product) => (
                                Array(product.necessaryUP * 5).fill(1).map((i) => (
                                    <div style={{...productiveUnitStyle, ...{backgroundColor: product.color}}} id={"" + product.name} key={""+ product.name + i}>
                                        <span>{product.name}</span>
                                    </div>
                                ))
                            ))
                        }
                    

                        {
                            keys.map((item) => (
                                <div style={productiveUnitStyle} id={"" + item} key={item}>
                                    <span>Livre</span>
                                </div>
                            ))
                        }
                    </div>
                }

                <span id="production-title">Produção</span>

                {type === "push-production" &&
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th>Unidade por semana</th>
                                <th>Produção total</th>
                            </tr>

                            {
                                production.map((product) => (
                                    <tr>
                                        <th>
                                            <div className="color-square" style={{backgroundColor: product.color}}></div>
                                            {product.name}
                                        </th>
                                        <th>{product.value}</th>
                                        <th>{product.value}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }

                {type === "pull-production" &&
                    <table className="table">
                    <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Unidade</th>
                        <th>Produção total</th>
                    </tr>

                    {
                        production.map((product) => (
                            <tr>
                                <th>
                                    <div className="color-square" style={{backgroundColor: product.color}} ></div>
                                    {product.name}
                                </th>
                                <th>{product.value}</th>
                                <th>{product.value}</th>
                            </tr>
                        ))
                    }
                    </tbody>
                    </table>
                }
            </div>
        </>
    )
}