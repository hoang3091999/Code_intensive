import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const data = [
    {
      name: "Nguyễn Văn Tài",
      learningClass: "Code Intensive",
      slogan: "Trở thành master coding là ước mơ của tôi",
    },
    {
      name: "Trịnh Mẫn Nhi",
      learningClass: "Web Fullstack",
      slogan: "Học học nữa học mãi",
    },
    {
      name: "Vũ Long Môn",
      learningClass: "Code for everyone",
      slogan: "Quyết tâm thành thạo ReactJs",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <Card name={item.name} learningClass={item.learningClass} slogan={item.slogan} />
      ))}
    </div>
  )
}
export default App;
