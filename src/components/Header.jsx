// components/Header.jsx
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="header sticky-top">
      <nav className="navbar bg-body-tertiary bg-rosa">
        <div className="container-fluid">
          <button 
            className="btn border-0" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#minhaSidebar"
          >
            <i className="bi bi-justify fs-2 text-rosa"></i>
          </button>

          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <i className="bi bi-house fs-2 text-rosa"></i>
            <h1 className="ms-3 text-white fs-4 mb-0">K e M Ateliê</h1>
          </Link>
        </div>
      </nav>

        <div className="offcanvas offcanvas-start bg-rosa" tabIndex="-1" id="minhaSidebar">
        
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          <div class="list-group d-flex flex-column gap-3">

            <ul className="list-unstyled d-flex flex-column gap-3 fs-5">

              <li>
                <Link to="/" className="text-decoration-none text-white">Home</Link>
              </li>
              
              <li className=''>
                <Link to="/produtos" className="text-decoration-none text-white">Cadastrar Produtos</Link>
              </li>

              <li className=''>
                <Link to="/estoque" className="text-decoration-none text-white">Estoque</Link>
              </li>

              <li className=''>
                <Link to="/finalizar-compra" className="text-decoration-none text-white">Finalizar compras</Link>
              </li>

            </ul>

          </div>
        </div>
      </div>

       </div>   
  )
}

export { Header }