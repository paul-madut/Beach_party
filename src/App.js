
import Main from "./components/Main/Main";
import Login from "./components/Login/Login"
import React, { useEffect } from "react";
import { BrowserRouter,Route, Routes, Link,Navigate, useNavigate } from "react-router-dom";
import "./index.css"
import {useSelector } from "react-redux";

function App() {
  const logState = useSelector((state) => state.loggedIn.logState)


  return (
    <BrowserRouter>
    <main>
      <Routes>

        <Route path="app" element={<Main/>} />
        
        <Route path="inbox" element={<Login/>} />
        <Route path="/" element={!logState ? <Login/>: <Main/>} />

      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
