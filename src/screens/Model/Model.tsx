import "./style.css"

export function Model(){
    const keys = [...Array(135).keys()]

    return (
        <>
            <div className="body model-mode">
                <span id="model-title">Modelo</span>
                
                <div id="model">
                    {
                    keys.map((item) => (
                        <div className="productive-unit" id={"" + item}>

                        </div>
                        ))
                    }

                </div>

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