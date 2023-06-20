import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import ProductList from './components/ProductList.js';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<ProductList />} />
        {/* Other rutes */}
      </Routes>
    </Router>
  );
}

export default App;
