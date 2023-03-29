import { Routes, Route } from "react-router-dom";
import Home from './pages'
import Overzicht from './pages/overzicht'
import Games from './pages/games'
import Login from './pages/login'
import Register from './pages/login/register.js'
import Admin from './pages/admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="overzicht" element={<Overzicht />} />
        <Route path="spellen" element={<Games />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;