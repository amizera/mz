import { useState } from 'react'
import {Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './Components/Location'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { locations } from './data'

function Home() {
  const [count, setCount] = useState(0)
  
  const destinations = locations.map(item => {
    return (
      <Location 
        key={item.id}
        locationTitle={item.name}
        locationAddress={item.street}
        locationImage={item.coverImg}/>
    )
  })

  return (
    <div>
      <Header />
      {destinations}
      <Footer />
    </div>
  )
}

export default Home