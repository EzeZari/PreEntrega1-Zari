
import './App.css';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"  
import Navbar from "./components/Navegacion/Navbar"
import Items from "./components/Pages/Items"
import Inicio from "./components/Pages/Inicio"
import Nosotros from './components/Pages/Nosotros';
import Contacto from './components/Pages/Contacto';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
<Route path='/' exact component={Inicio} />
<Route path='/Nosotros' exact component={Nosotros} />
<Route path='/Items' component={Items} />
<Route path='/Contacto' exact component={Contacto} />
      </Routes>
     </Router>
     


    </div>
  );
}

export default App;

