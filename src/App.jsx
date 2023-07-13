import Home from "./components/Home";
import Admin from "./components/Admin";
import AddTask from "./components/AddTask";
import LoginForm from "./components/LoginForm";
import Logout from "./components/LogOut";
import Register from "./components/Register";
import Bg from "./components/Bg";
import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
  
function App(){
  const [bookings, setBookings] = useState([])
  const [uPermission,setUpermission]=useState(false);
  const [tables, setTables] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const bkngsFromServer = await fetchBookings()
      const tablesFromServer = await fetchTables()
      setBookings(bkngsFromServer)
      setTables(tablesFromServer)
    }

    getTasks()
  }, [])

  const deleteCard = async (bId,tId)=>{    //the method for deleting json data
    
    await fetch(`http://localhost:5000/bookings/${bId}`,
    {method: 'DELETE'})
    setBookings(bookings.filter((card)=> card.id !==bId,
    console.log(bId)
    ))
    const table = await fetchTable(tId)
    const updatedAvail = { ...table, availablity: !table.availablity }

    await fetch(`http://localhost:5000/table/${tId}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedAvail)

    })
    const data = res.json()

  setTables(
    tables.map((table)=>
    table.id === tId ? {...table, availablity:!data.availablity}: table
    ))
    
}
  //Fetch Tasks
  const fetchBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()
    return data
  }

  const fetchTables = async () => {
    const res = await fetch('http://localhost:5000/table')
    const data = await res.json()
    return data
  }
  const fetchTable = async (id) =>{
    const res = await fetch(`http://localhost:5000/table/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  const addBookings = async (booking) => {
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    const data = await res.json()

    setBookings([...bookings, data])
  }


  const reminder = async (id) => {
    const table = await fetchTable(id)
    const updatedAvail = { ...table, availablity: !table.availablity }

    const res = await fetch(`http://localhost:5000/table/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedAvail)

    })
    const data = res.json()

  setTables(
    tables.map((table)=>
    table.id === id ? {...table, availablity:!data.availablity}: table
    ))
  }


  return(
<>
<Router>
		<Routes>
		<Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
		{/* <Route path="/admin/*" element={<Admin/>} /> */}
		<Route path="/AddTask" element={<AddTask onAdd={addBookings} data={tables} updateId={reminder}/>} />
    <Route path='/Admin' element={<Bg style data={bookings} onDelete={deleteCard} permission={uPermission}/>}/>
    <Route path='/Login' element={<LoginForm setPermission={setUpermission} permission={uPermission}/>}/>
    <Route path='/LogOut' element={<Logout/>}/>
    <Route path='/Register' element={<Register/>}/>
		</Routes>
</Router>
</>
)
}

export default App;