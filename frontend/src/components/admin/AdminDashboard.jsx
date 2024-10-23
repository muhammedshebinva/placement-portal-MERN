import React from 'react'
import Navbar from '../shared/Navbar'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
//login
//view and manage students
//vew and manage companies
//schedule class

function AdminDashboard() {
  return (
    <div>
    <Navbar/>

    <div className='text-center'>
    <div className='flex flex-col gap-5 my-10'>
    <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#202449] font-medium'>School of Engineering & Technology</span>
                <h1 className='text-5xl font-bold'>Welcome to Admin page </h1>
                <p>Admin can mange users and companies</p>
               
    
    </div>

    <div>
    <Button className="rounded-full mr-1"><Link to={'/admin/viewstudents'}>View Students</Link> </Button>
    <Button className="rounded-full mr-1"><Link to={'/admin/viewcompanies'}>View Companies</Link> </Button>
    <Button className="rounded-full mr-1"><Link to={'/admin/ViewClass'}>Manage Class Schedule</Link> </Button>
    </div>

    
    
    </div>
    

   


    </div>
  )
}

export default AdminDashboard

