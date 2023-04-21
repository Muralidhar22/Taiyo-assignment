import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type ContactState = {
  firstname: string;
  lastname: string;
  status: "active" | "inactive"  
}[]

const initialState: ContactState = []

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers:{
        updateContact() {},
        deleteContact() {},
        addContact() {}
    }
})

export default contactSlice.reducer;

export const selectContactList = (state: RootState) => state.contact