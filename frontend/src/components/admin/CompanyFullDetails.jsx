import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../shared/Navbar';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { useNavigate } from 'react-router-dom'

function CompanyFullDetails() {
  const {companies} = useSelector(store => store.company); // Get companies directly
  const navigate = useNavigate();
  return (
    <div className='CompanyFullDetailPage flex flex-col gap-5 my-10'>
    
      <span class=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#2e4053] font-medium">Company Details</span>

      {companies?.map((company) => ( // Check if companies exist before mapping
        <div key={company.id}  className='CompanyFullDetailPage flex flex-col gap-5 my-10'>

        <div className='flex gap-2 space-y-2'>
        <Avatar className="cursor-pointer">
            <AvatarImage src={company.logo} alt="@logo" />
        </Avatar>
        <div>
            <h4 className='text-3xl'>{company.name}</h4>
            
          </div>
        </div>

          <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
          <Edit2 className='w-4' />
          <span>Edit</span>
         </div>
         
        </div>
      ))}
    </div>
  );
}

export default CompanyFullDetails;