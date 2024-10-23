import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassForm from './ClassForm';
import ClassList from './ClassList';
import Navbar from '../shared/Navbar';


function ViewClass() {
    const [classes, setClasses] = useState([]);

    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:8000/api/classes');
        setClasses(response.data);
    };

    useEffect(() => {
        fetchClasses();
    }, []);
  return (
    <div>
    <Navbar/>
    <h1>Training Class Schedule</h1>
    <ClassForm fetchClasses={fetchClasses} />
    <ClassList classes={classes} fetchClasses={fetchClasses} />

    
    </div>
  )
}

export default ViewClass