import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name:"student",
    initialState:{
        students:[],
        searchStudentByText:"",
    },
    reducers:{
        setStudents:(state,action) =>{
            state.students = action.payload;
        },
        setSearchStudentByText:(state,action)=>{
            state.searchStudentByText = action.payload;
        }
    }
});

export const {setStudents,setSearchStudentByText} = studentSlice.actions;
export default studentSlice.reducer;