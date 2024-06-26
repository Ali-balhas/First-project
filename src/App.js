import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
