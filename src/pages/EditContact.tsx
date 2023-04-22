import { useParams } from "react-router-dom";
import { selectContactListById, updateContact } from "../features/contact/contactSlice";
import { useTypedSelector } from "../app/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"

import { ContactType } from "../types";

const EditContact = () => {
    const { id } = useParams();
    const data = useTypedSelector((state) => selectContactListById(state, id ?? ""))
    const [formState, setFormState] = useState<ContactType | undefined>(data)
    const dispatch = useDispatch()

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(updateContact(formState))
        toast.success("Contact updated successfully")
    }
    
    if(formState) {
        return(
            <div className="flex flex-col gap-10 items-center h-min-100 justify-center">
            <h1 className="text-xl font-semibold">Edit Contact</h1>
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 items-center">
                <div className="flex gap-2 items-center">
                    <label htmlFor="firstname">First Name:</label>
                    <input className="p-1 rounded-md border-2" required type="text" id="firstname" 
                           onChange={(e) => setFormState(prev => (prev && {...prev,firstName: e.target.value }))} 
                           value={formState.firstName}/>  
                </div>
                <div className="flex gap-2 items-center">
                    <label htmlFor="lastname">Last Name:</label>
                    <input className="p-1 rounded-md border-2" required type="text" id="lastname"
                     onChange={(e) => setFormState(prev => (prev && {...prev,lastName: e.target.value }))}
                    value={formState.lastName}/>  
                </div>
                <div className="flex gap-5 items-center">
                    <div>Status:</div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <input required type="radio" name="status"
                             onChange={(e) => setFormState(prev => (prev && {...prev,status: e.target.value === "on" ? "active" : "inactive"}))} 
                            id="active" checked={formState.status === "active"} /> 
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input required type="radio" name="status" 
                            onChange={(e) => setFormState(prev => (prev && {...prev,status: e.target.value === "on" ? "inactive" : "active"}))} 
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
return null
}

export default EditContact;