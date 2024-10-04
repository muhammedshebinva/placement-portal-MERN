
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAllCompanies } from '@/redux/companySlice';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { Input } from '../ui/input'
import CompaniesTable from './CompaniesTable';
import { setSearchCompanyByText } from '@/redux/companySlice';
import useAllCompanies from '@/hooks/useAllCompanies';
import AdminViewCompaniesTable from './AdminViewCompaniesTable';
function ViewCompanies() {
    
    useAllCompanies();
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);



    // const {allCompanies} = useSelector(store=> store.company)
    // useEffect(()=>{
    //     const fetchAllCompanies = async ()=>{
    //         try{
    //             const response = await axios.get('http://localhost:8000/api/admin/companies');
    //             dispatch(setAllCompanies(response.data))
    //         } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };

    //     fetchAllCompanies();
    // }, [])
  return (
         <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                   
                </div>
                <AdminViewCompaniesTable/>
            </div>
        </div>
  )
}

export default ViewCompanies