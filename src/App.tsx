import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Registro';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
