import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name:"role",
    initialState:{
        user_role:''
    },
    reducers:{
        setRole(state,action){
            const role = action.payload
            state.user_role = role
        },
        removeRole(state){
            state.user_role = ''
        }
    }
})

export const roleActions = roleSlice.actions
export default roleSlice;