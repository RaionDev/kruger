import './App.css';
import Home from './pages/Home';
import Administrador from './pages/Administrador';
import Empleado from './pages/Empleado';
import DataProvider from './components/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Administrador' element={<Administrador/>} />
          <Route path='/Empleado' element={<Empleado/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
