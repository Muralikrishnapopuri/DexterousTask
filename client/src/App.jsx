
import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';

export const modeContext = createContext();
function App() {
const [Mode,setMode]=useState(0);
  return (
    <>
    <modeContext.Provider value={{Mode,setMode}}>
      <Header/>
      <Products/>
      <Footer/>
    </modeContext.Provider>
    </>
  )
}

export default App
