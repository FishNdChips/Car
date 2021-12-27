import "./app.css";
import Home from "./pages/Home.jsx";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={< />} />
        </Routes>
      </Router>
  );
}

export default App;
