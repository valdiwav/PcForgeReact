import React from 'react'
import BarraNav from './components/BarraNav'
import './App.css';
import Aprende from './pages/Aprende';
import Home from './pages/Home';
import Conocimiento from './pages/Conocimiento';
import Pasos from './pages/Pasos';


export default function App() {
  return <div>
    <header>
       <BarraNav/>
    </header>
    <main>
        <Pasos/>
    </main>
  </div>
  
}
