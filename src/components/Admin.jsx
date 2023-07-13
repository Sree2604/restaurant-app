// import './App.css'
// import vidBg from './assets/FireBg.mp4'
// import NavBar from './NavBar'
import Bg from './Bg'
import { useState,useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import AddCard from './AddCard'
import LoginForm from './LoginForm'
import Register from './Register'
import Navigation from './Navigation'
function Admin() {                      //App function
  const [bookings, setBookings] = useState([])
  const [uPermission,setUpermission]=useState(false);
  useEffect(() => {
    const getTasks = async () => {
      const bkngsFromServer = await fetchBookings()
      setBookings(bkngsFromServer)
    }
    getTasks()
  }, [])                              //based on this data variable, the screen renders with the new data from json file.
          
  const fetchBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()
    return data
  }
  
  const deleteCard = async (id)=>{    //the method for deleting json data

    await fetch(`http://localhost:5000/bookings/${id}`,
    {method: 'DELETE'})
    setBookings(bookings.filter((card)=> card.id !==id,
    console.log(id)
    ))
}




  return (
    <>
    <div className='main'>
          <div className='content'>
          
          <Navigation/>
          
          </div>
          
    </div>
    </>
  )
}

export default Admin;
