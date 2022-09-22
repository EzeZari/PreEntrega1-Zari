
import './App.css';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"  
import Navbar from "./components/Navegacion/Navbar"
import Items from "./components/Pages/Items"
import Inicio from "./components/Pages/Inicio"
import Nosotros from './components/Pages/Nosotros';
import Contacto from './components/Pages/Contacto';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    
     <Router>
      <Navbar/>
      <Routes>
<Route path='/' element={<Inicio/>} />
<Route path='/Nosotros' element={<Nosotros />} />
<Route path='/Items'element={<Items/>} />
<Route path='/Contacto' element={<Contacto/>} />
      </Routes>
      <div>
<ItemListContainer greetings="Esta es mi pagina" /> 
</div> 
     </Router>

   
)
}

export default App;

