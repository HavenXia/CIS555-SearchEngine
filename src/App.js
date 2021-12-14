import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Result from './result';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:query" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
