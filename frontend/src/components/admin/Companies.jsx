import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import CompanyFullDetails from './CompanyFullDetails'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { companies } = useSelector(store => store.company);

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);

 
    return (
        <div>
            <Navbar />
          
            
              <div className='flex  items-center justify-center my-5'>
              { companies.length>0 ? 
                <div className='flex  items-center justify-center '>
            
                <CompanyFullDetails/>
                </div>
                
                :
                <div className='flex  items-center justify-center my-5'>
    
                <Button onClick={() => navigate("/admin/companies/create")}>Register Company</Button>
            </div>
            
              }
                
            </div>
           
        </div>
    )
}

export default Companies