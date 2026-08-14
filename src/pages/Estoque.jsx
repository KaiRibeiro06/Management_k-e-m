import { Link } from "react-router-dom"


function Estoque() {
    return(

        <div className="container mt-5">
            <h1 className="text-center text-rosa">Estoque</h1>
            
                <div className=" input-group d-flex justify-content-between align-items-center">

                    <span className="input-group-text bg-white border-end-0 border-rosa">
                        <i className="bi bi-search"></i>
                    </span>

                    <input className="form-control me-2 border-rosa border-start-0 " type="text" placeholder=  "Buscar produto ou código..."/>
                    
                    <button className="btn btn-buscar" type="submit">Buscar</button>
                </div>

                <div className="produtos border border-rosa border-2 rounded p-4 mt-4">

                    <table className="table table-striped mt-4 border-rosa">
                        <thead className="bg-rosa text-white">
                            <tr>
                                <th scope="col"><button className="btn btn-sm btn-buscar rounded-5">Todos <span>(10)</span></button></th> 
                                <th scope="col">Produto</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Imagem</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                                <td>001</td>
                                <td>Produto 1</td>
                                <td>10</td>         
                                <td>
                                    <img src="https://via.placeholder.com/50" alt="Produto 1" />
                                </td>       
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Produto 2</td>  
                                <td>5</td>
                                <td>
                                    <img src="https://via.placeholder.com/50" alt="Produto 2" />
                                </td>
                            </tr>
                            <tr>
                                <td>003</td>    
                                <td>Produto 3</td>
                                <td>8</td>
                                <td>
                                <img src="https://via.placeholder.com/50" alt="Produto 3" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
           
        </div>
    )
}

export { Estoque }