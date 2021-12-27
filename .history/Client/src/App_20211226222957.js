import "./app.css";
import Home from "./pages/Home.jsx";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import TravelCategories from "./components/TravelCategories";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<TravelCategories />} />
        </Routes>
      </Router>
  );
}

export default App;
