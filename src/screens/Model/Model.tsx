import "./style.css"

export function Model(){
    return (
        <>
            <div className="body model-mode">
                <span id="model-title">Modelo</span>
                


                <span id="production-title">Produção</span>

                <table className="table">
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
                </table>
            </div>
        </>
    )
}