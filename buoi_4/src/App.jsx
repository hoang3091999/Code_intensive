import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [show,isshow] = useState(false) 
  const handleInputname = (e) => {
    const value = e.target.value;
    setName(value);
    isshow(false);
  }
  const handleInputEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    isshow(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    isshow(true);
    console.log({ name, email });

    setTimeout(() => {
      setName('');
      setEmail('');
      isshow(false);
    }, 2000);
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" onChange={handleInputname} value={name} />
      <label>email</label>
      <input type="text" onChange={handleInputEmail} value={email}  />
      <button type="submit">Submit</button>
      {show ? (
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
