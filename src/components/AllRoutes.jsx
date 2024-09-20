import React from 'react'
import{Routes,Route, Navigate} from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Tickets} from '../pages/Tickets'
import { Login } from '../pages/Login'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import TicketView from '../pages/TicketView'
import TicketCreate from '../pages/TicketCreate'
import TicketEdit from '../pages/TicketEdit'
function PageWrapper({children}){
  const {authDetails}=useContext(AuthContext)
  if(!authDetails.isLoggedIn){
    return <Navigate to="/login"/>

  }
  return children
}
function AllRoutes() {

  return (
    <div>
       <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/tickets'
             element={<PageWrapper><Tickets/></PageWrapper>}
             />
            <Route path='/about' 
            element={<PageWrapper><About/></PageWrapper> }
            />
            <Route path='/contact' 
            element={<PageWrapper><Contact/></PageWrapper>}
            />
            <Route path='/login' 
            element={<Login/>}
            />
            <Route path='/ticket/view/:id' 
            element={<PageWrapper><TicketView/></PageWrapper>}
            />
            <Route path='/ticket/create' 
            element={<PageWrapper><TicketCreate/></PageWrapper>}
            /><Route path='/ticket/edit/:id' 
            element={<PageWrapper><TicketEdit/></PageWrapper>}
            />
            
            
        </Routes>
    </div>
  )
}

export default AllRoutes
