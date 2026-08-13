import { Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home.jsx";
import {CadastrarProdutos} from "./pages/CadastrarProdutos.jsx";
import { Layout } from './components/Layout.jsx';
import { Estoque } from './pages/Estoque.jsx';
import "./App.css";

function App() {
  return(
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<CadastrarProdutos />} />
        <Route path="/estoque" element={<Estoque />} />
      </Route>
    </Routes>
  )
}

export default App;