import "./app.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Brows
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
