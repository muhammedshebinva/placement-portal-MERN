import React, { useState } from 'react';
import axios from 'axios';

const ClassForm = ({ fetchClasses }) => {
    const [classData, setClassData] = useState({ title: '', date: '', location: '' });

    const handleChange = (e) => {
        setClassData({ ...classData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/classes', classData);
        fetchClasses();
        setClassData({ title: '', date: '', location: '' });
    };

    return (
        <div>
      


<form onSubmit={handleSubmit}>
<div class="grid gap-6 mb-6 md:grid-cols-4">
    <div>
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" name="title" id="title" value={classData.title} onChange={handleChange}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Class Title" required />
    </div>
    <div>
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
        <input  name="date" type="date" value={classData.date} onChange={handleChange} required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    </div>
    <div>
        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class No</label>
        <input name="location" value={classData.location} onChange={handleChange} type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Class No" required />
    </div>  
    <div>
    <button type="submit" class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add Class</button>
    </div>
    
    
</div>

</form>


        </div>
    );
};

export default ClassForm;
