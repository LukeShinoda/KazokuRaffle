import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";import './index.css';
import App from './App';
import Raffles from "./pages/Raffles.js";
import Giveaways from "./pages/Giveaways.js";
import Tipping from "./pages/Tipping.js";
import Leaderboard from "./pages/Leaderboard.js";
import Account from "./pages/Account.js";
import Navbar from "./Navbar/Navbar.js";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="../" element={<App />}/>
      <Route path="/Raffles" element={<Raffles />}/>
      <Route path="/Giveaways" element={<Giveaways />}/>
      <Route path="/Tipping" element={<Tipping />}/>
      <Route path="/Leaderboard" element={<Leaderboard />}/>
      <Route path="/Account" element={<Account />}/>
    
  </Routes>
    <Navbar />
    </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
