import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import Technologies from './components/Technologies';


function App() {

  return (
    <div className="App">
        <NavBar/>
      <div className='container'>
        <Home />
        <About />
        <Proyects />
        <Technologies />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
