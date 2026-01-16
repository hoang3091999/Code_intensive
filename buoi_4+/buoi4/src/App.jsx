import { useState } from "react";
import "./App.css";
import Search from "./components/search-bar/search.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleAdd = () => {
    if (!Input.trim()) {
      return;
    }
    setList([...list, Input]);
    console.log({ list });
    setInput("");
  };

  return (
    <div>
      <Search OnChange={handleInput} job={Input} OnClick={handleAdd}></Search>
      <br></br>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
