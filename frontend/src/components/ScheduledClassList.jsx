
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';

function ScheduledClassList() {

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
 

   




<div class="relative overflow-x-auto">
<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Title
            </th>
            <th scope="col" class="px-6 py-3">
                Date
            </th>
            <th scope="col" class="px-6 py-3">
                Class No
            </th>
            
        </tr>
    </thead>
    <tbody>
    {classes.map((classItem) => (
        <tr key={classItem._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {classItem.title}
            </th>
            <td class="px-6 py-4">
            {new Date(classItem.date).toLocaleDateString()}
            </td>
            <td class="px-6 py-4">
            {classItem.location}
            </td>
            
        </tr>
    ))}
    </tbody>
</table>
</div>

    
    
    </div>
  )
}

export default ScheduledClassList