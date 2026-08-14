import { Link } from 'react-router-dom'

function CadastrarProdutos() {
  return (
    <div className="container-cadastro d-flex flex-column align-items-center justify-content-center gap-3">
      <div className="formulario-cadastro d-flex flex-column align-items-center justify-content-center gap-3 border border-rosa border-2 border-rosa rounded p-4 mt-5 w-50">
        
        <h1 className='mt-2 d-flex text-rosa'>Cadastrar Produtos</h1>

        <input 
          className="form-control w-50 border-rosa" 
          type="text" 
          placeholder="Código do Produto" 
          aria-label="default input example" 
        />

        <input 
          className="form-control w-50 border-rosa" 
          type="text" 
          placeholder="Nome do Produto" 
          aria-label="default input example" 
        />
      
      <input 
          className="form-control w-50 border-rosa" 
          type="number" 
          placeholder="Quantidade do Produto" 
          aria-label="default input example" 
        />

      <input 
          className="form-control w-50 border-rosa" 
          type="file" 
          placeholder="Imagem do Produto" 
          name="imagem" 
          accept="image/*"
        />

      <button className="btn bg-rosa-2 text-white"data-bs-toggle="modal" data-bs-target="#exampleModal">
        Cadastrar
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastro de Produto</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Produto cadastrado com sucesso!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export { CadastrarProdutos }