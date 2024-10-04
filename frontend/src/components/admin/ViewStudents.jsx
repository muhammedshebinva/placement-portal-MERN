import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import axios from 'axios'
import StudentsTable from './StudentsTable';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '@/redux/studentsSlice';



function ViewStudents() {

  //const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  const {students} = useSelector(store=>store.student)

  useEffect(() => {
    const fetchAllSudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/students');
        dispatch(setStudents(response.data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllSudents();
  }, []);




    
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Students {students?.length}</h1>
                <StudentsTable />
            </div>

    </>
  )
}

export default ViewStudents