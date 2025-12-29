import { useState } from 'react'
const Button = ( handlesubmit ) => {
  return <button onClick={handlesubmit}>submit</button>
}
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [show,isshow] = useState(false) 
  const handleInputname = (e) => {
    const value = e.target.value;
    setName(value)
  }
  const handleInputEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    isshow(true);
    console.log({name, email});
  }
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" onChange={handleInputname} />
      <label>email</label>
      <input type="text" onChange={handleInputEmail}  />
      <button >submit</button>
      {isshow ? (
        <>
        <br />
        {name}
        <br />
        {email}
        </>
      ) : <></>}
    </form>
    
  </div>
  )
}

export default App
