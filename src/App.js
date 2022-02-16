import React from "react";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
