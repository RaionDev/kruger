import './App.css';
import Home from './pages/Home';
import Administrador from './pages/Administrador';
import Empleado from './pages/Empleado';
import DataProvider from './components/Provider';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Administrador":
      component = <Administrador />
      break;

    case "/Empleado":
      component = <Empleado />
      break;
    default:
      component = <Home />
      break;
  }
  return (
    <DataProvider>
      <div className="App">
        {component}
      </div>
    </DataProvider>
  );
}

export default App;
