import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllCompanies } from '@/redux/companySlice';

function useAllCompanies() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/admin/companies`);
                console.log('called');
                if(res.data.success){
                    dispatch(setAllCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])
  
}

export default useAllCompanies