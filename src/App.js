import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap-utilities.min.css';
import './assets/scss/style.scss';
import Navbar from './components/Navbar'
import Foooter from './components/Foooter';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Body />
        <Foooter />
    </div>
  );
}

export default App;
