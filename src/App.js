import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useGlobalContext } from './context';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
