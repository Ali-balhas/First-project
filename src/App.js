import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
