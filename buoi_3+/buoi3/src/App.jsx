import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import CardList from "./components/Card/cardlist.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <div style={{display : "flex", gap : "10px"}}>
        <CardList/>
        <CardList/>
        <CardList/>
        <CardList/>
      </div>
      
    </>
  );
}

export default App;
