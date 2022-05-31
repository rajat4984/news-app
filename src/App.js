import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useGlobalContext } from './context';

function App() {
  const {fetchNews} = useGlobalContext();

  // useEffect(() => {
  //   fetchNews()
  // }, [])
  
  return (
    <div className="App">
     <Navbar/>
    </div>
  );
}

export default App;
