import { useState } from "react";
import { ContactType } from "../types";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contact/contactSlice";

const INITIAL_STATE: ContactType = {
    id: nanoid(),
    lastName: "",
    firstName: "",
    status: "active"
}

const CreateContact = () => {
    const [formState, setFormState] = useState<ContactType>(INITIAL_STATE)
    const dispatch = useDispatch()

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addContact(formState))
        setFormState(INITIAL_STATE)
    }
    
    return(
        <div className="flex flex-col gap-10 items-center h-min-100 justify-center">
            <h1 className="text-xl font-semibold">Create Contact</h1>
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 items-center">
                <div className="flex gap-2 items-center">
                    <label htmlFor="firstname">First Name:</label>
                    <input className="p-1 rounded-md border-2" required type="text" id="firstname" 
                           onChange={(e) => setFormState(prev => ({...prev,firstName: e.target.value }))} 
                           value={formState.firstName}/>  
                </div>
                <div className="flex gap-2 items-center">
                    <label htmlFor="lastname">Last Name:</label>
                    <input className="p-1 rounded-md border-2" required type="text" id="lastname"
                     onChange={(e) => setFormState(prev => ({...prev,lastName: e.target.value }))}
                    value={formState.lastName}/>  
                </div>
                <div className="flex gap-5 items-center">
                    <div>Status:</div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <input required type="radio" name="status"
                             onChange={(e) => setFormState(prev => ({...prev,status: e.target.value === "on" ? "active" : "inactive"}))} 
                            id="active" checked={formState.status === "active"} /> 
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input required type="radio" name="status" 
                            onChange={(e) => setFormState(prev => ({...prev,status: e.target.value === "on" ? "inactive" : "active"}))} 
                            id="inactive" checked={formState.status === "inactive"}/> 
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                </div>
                <button className="rounded-md p-2 border-2 cursor-pointer">Save Contact</button>
            </form>
        </div>
    )
}

export default CreateContact;