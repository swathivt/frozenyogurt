import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/mobile.css';
import { NavBar } from './components/navbar/NavBar.js';
import { BigHome } from './components/keli/BigHome.js';

function App() {
  return (
    <div className="App">
      <div id="page">
        <NavBar />
        <div id="body" className='home'>
          <BigHome />
          {/* Content Body - Component */}
          {/* Content Footer - Component */}
        </div>
        <footer className="">
          {/* Jeel */}
        </footer>

      </div> {/* page div */}
    </div>
  );
}

export default App;
