
import './App.css';
import GenerateLink from './pages/GenerateLink';
import RamaCindy from './pages/RamaCindy';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Undangan from './pages/Undangan';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RamaCindy/>} />
      </Routes>
      <Routes>
        <Route exact path="/:nama" element={<RamaCindy/>} />
      </Routes>
      <Routes>
        <Route exact path="/fitur/generate-link" element={<GenerateLink/>} />
      </Routes>
      <Routes>
        <Route exact path="/undangan/pernikahan" element={<Undangan/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
