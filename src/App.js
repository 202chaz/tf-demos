import './App.css';
import FaceMesh from './component/face/Facemesh';
import Hand from './component/hand/Hand';
import Pose from './component/pose/Pose';
import ObjectDetection from './component/object/Object';
import Holistic from './component/holistic/Holistic';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://www.watadict.com/img/logo.png" alt="" width="163" height="79" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">FaceMesh</Link>
              </li>
              <li className="nav-item">
                <Link to="hand" className="nav-link">Hand</Link>
              </li>
              <li className="nav-item">
                <Link to="pose" className="nav-link">Pose</Link>
              </li>
              <li className="nav-item">
                <Link to="object" className="nav-link">Object Detection</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <nav>
          <ul>
            <li>
              <Link to="/">FaceMesh</Link>
            </li>
            <li>
              <Link to="hand">Hand</Link>
            </li>
            <li>
              <Link to="pose">Pose</Link>
            </li>
            <li>
              <Link to="object">Object Detection</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<FaceMesh />}></Route>
          <Route path="/hand" element={<Hand />}></Route>
          <Route path="/pose" element={<Pose />}></Route>
          <Route path="/object" element={<ObjectDetection />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
