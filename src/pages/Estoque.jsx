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

            <div className="table-card border border-rosa border-2 rounded p-4 mt-4">
            <div className="card-head d-flex justify-content-between align-items-center border-bottom border-1 border-rosa pb-2 mt-4">
                <h2>Produtos</h2>
                    <div className="d-flex gap-2 flex-wrap ">
                        <button type="button" className="filter-pill active btn btn-outline rounded-3 btn btn-sm btn-buscar rounded-5">Todos <span>184</span></button>
                        <button type="button" className="filter-pill border border-rosa rounded-3 btn btn-sm btn-buscar rounded-5">Ok <span>172</span></button>
                        <button type="button" className="filter-pill border border-rosa rounded-3 btn btn-sm btn-buscar rounded-5">Repor <span>9</span></button>
                        <button type="button" className="filter-pill border border-rosa rounded-3 btn btn-sm btn-buscar rounded-5">Em falta <span>3</span></button>
                    </div>

                    <div className="">

                    </div>
            </div>

            
            </div>
               
           
        </div>
    )
}

export { Estoque }