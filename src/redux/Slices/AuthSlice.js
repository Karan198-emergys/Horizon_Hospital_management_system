import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAdmin : false,
    token : null,
    isAunthenticated: false
}

const AuthenticationSlice = createSlice({
    name:"Authentication",
    initialState,
    reducers:{
        
    }
})