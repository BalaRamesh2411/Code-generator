import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QR_code from "./components/QR_Code"; 
import BAR_code from "./components/BAR_code"; 
import Home from "./components/Home";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QR_code" element={<QR_code />} />
          <Route path="/Bar_code" element={<BAR_code />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
