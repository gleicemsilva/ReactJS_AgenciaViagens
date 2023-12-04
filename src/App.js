import './index.css';

// QUEBRA ALGUMAS FORMATAÇÕES GERAIS DO SITE - AJUSTAR
// import './perfil.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PÁGINAS
import Home from './pages/Home';
import Promocoes from './pages/Promocoes';
import Destinos from './pages/Destinos';
import Contato from './pages/Contato';
import Login from './pages/Login';
import QuemSomos from './pages/QuemSomos';
import CentralAjuda from './pages/CentralAjuda';
import TermosCondicoes from './pages/TermosCondicoes';
import Duvidas from './pages/Duvidas';
import TrabalheConosco from './pages/TrabalheConosco';
import CadastrarUsuario from './pages/CadastrarUsuario';

import Perfil from './pages/perfil/Perfil';
import MinhasPassagens from './pages/perfil/MinhasPassagens';
import ComprarPassagem from './pages/perfil/ComprarPassagem';
import InfoCadastrais from './pages/perfil/InfoCadastrais';
import ExcluirConta from './pages/perfil/ExcluirConta';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/promocoes' element={<Promocoes />} />
        <Route path='/destinos' element={<Destinos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrarUsuario' element={<CadastrarUsuario />} />
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/centralajuda' element={<CentralAjuda />} />
        <Route path='/termoscondicoes' element={<TermosCondicoes />} />
        <Route path='/duvidas' element={<Duvidas />} />
        <Route path='/trabalheconosco' element={<TrabalheConosco />} />
        
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/minhasPassagens' element={<MinhasPassagens />} />
        <Route path='/comprarPassagem' element={<ComprarPassagem />} />
        <Route path='/infoCadastrais' element={<InfoCadastrais />} />
        <Route path='/excluirConta' element={<ExcluirConta />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );


 }

export default App;
