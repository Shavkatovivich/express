
import React from 'react';
import Homepage from "./Components/Homepage/Homepage"
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Allshop from "./Components/AllShop/Allshop";
import "./App.css"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Homepage />} />
            <Route path="/allshop" element={<Allshop/>}/>
          </Route>
        </Routes>
  
    </div>
  );
}

export default App;
