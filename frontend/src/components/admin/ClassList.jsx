import React from 'react';
import axios from 'axios';

const ClassList = ({ classes, fetchClasses }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/classes/${id}`);
        fetchClasses();
    };

    return (
        <div>
       

        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            
            <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
    <tbody>
    {classes.map((classItem) => (
        <tr  key={classItem._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {classItem.title}
            </th>
            <td class="px-6 py-4">
            {new Date(classItem.date).toLocaleDateString()}
            </td>
            <td class="px-6 py-4">
            {classItem.location}
            </td>
            
            <td class="px-6 py-4 text-right">
                
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDelete(classItem._id)}>Delete</button>
            </td>
        </tr>
    ))}
        
    </tbody>
</table>
</div>

        </div>
    );
};

export default ClassList;
