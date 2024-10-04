import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const shortlistingStatus = ["Accepted", "Rejected"];

function StudentsTable() {
    const { students, searchStudentByText } = useSelector(store => store.student);
    const [filterStudent, setFilterStudent] = useState( students);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredStudent = students.length >= 0 && students.filter((student)=>{
            if(!searchStudentByText){
                return true
            };
            return student?.name?.toLowerCase().includes(searchStudentByText.toLowerCase());

        });
        setFilterStudent(filteredStudent);
    },[students,searchStudentByText])


  return (
    <div>StudentsTable
    
    <div>
            <Table>
                <TableCaption>A list of your recent registered Students</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>FullName</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        students && students?.map((item) => (
                            <tr key={item._id}>
                                <TableCell>{item?.fullname}</TableCell>
                                <TableCell>{item?.email}</TableCell>
                                <TableCell>{item?.phoneNumber}</TableCell>
                                <TableCell >
                                    {
                                        item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                                    }
                                </TableCell>
                                <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="float-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>

                                </TableCell>

                            </tr>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    
    </div>
  )
}

export default StudentsTable