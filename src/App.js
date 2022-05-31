import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useGlobalContext } from './context';
import Footer from './components/Footer';

function App() {
  const {fetchNews} = useGlobalContext();

  // useEffect(() => {
  //   fetchNews()
  // }, [])
  
  return (
    <div className="App">
     <Navbar/>
     <Footer/>
    </div>
  );
}

export default App;
