import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects';
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
