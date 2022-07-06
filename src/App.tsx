import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
//import Saludo from './components/Saludo';

import Juanito from './components/Juanito';
import Maria from './components/Maria';
import Jhon from './components/Jhon';
import NavBar from "./components/NavBar";
//
import './App.css';
import Inicio from './components/Inicio';


function App() {
  return (
    <Fragment>
      <div className="App mt-5">
        <NavBar />
        <div className="image">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/maria" element={<Maria />} />
            <Route path="/juanito" element={<Juanito />} />
            <Route path="/jhon" element={<Jhon />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
