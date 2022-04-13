import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
