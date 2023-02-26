
import Main from "./components/Main/Main";
import Login from "./components/Login/Login"
import React from "react";
import { BrowserRouter,Route, Routes, Link } from "react-router-dom";

import "./index.css"

function App() {


  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="app" element={<Main/>} />
        <Route path="/" element={<Login/>} />

      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
