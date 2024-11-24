import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Create from "./components/create";
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
      <div className="cont">
        <h1 className="data">Data Entry</h1>
        <h3 className="data1">Crud Operations Are Here</h3>
      </div>
      < BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
