import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "nanoid";
import { ContactType } from "../../types";
import { useSelector } from "react-redux";


const initialState: ContactType[] = [
  {
    id: nanoid(),
    firstName: "John",
    lastName: "Doe",
    status: "active"
  },
  {
    id: nanoid(),
    firstName: "Foo",
    lastName: "Bar",
    status: "inactive"
  },
]

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers:{
        updateContact(state, action) {
          return state.map((contact) => contact.id === action.payload.id ? action.payload : contact ) 
        },
        deleteContact(state, action) {
          return state.filter((contact) => contact.id !== action.payload)
        },
        addContact(state, action) {
          state.push(action.payload)
        }
    }
})

export default contactSlice.reducer;

export const { addContact, deleteContact, updateContact } = contactSlice.actions;
export const selectContactList = (state: RootState) => state.contact
export const selectContactListById = (state:RootState, id: string) => state.contact.find(contact => contact.id === id)