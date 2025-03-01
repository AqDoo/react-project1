import { useState } from 'react'
import logo from '/src/Satbayev.png'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()),1000)
    return (
      <header>
        <img src={logo} alt={'Satbayev logo'} />
  
      <span>Time: {now.toLocaleTimeString()}</span>
  
    </header>
    )
  }