import { Link } from "react-router-dom";
import { ContactType } from "../types";
import { deleteContact } from "../features/contact/contactSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const ContactCard = ({ data }: { data: ContactType }) => {
    const dispatch = useDispatch()
    
    const onClickHandler = () => {
        dispatch(deleteContact(data.id))
    }
    
    return(
        <div className="flex gap-2 flex-col"> 
            <div className="flex flex-col gap-2 items-center border-2 rounded-md p-5 w-28">
                <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="avatar" className="w-10 h-10 rounded-full block" />
                <div className="flex flex-wrap h-8 justify-center">
                <span>{data.firstName}</span>
                <span>{data.lastName}</span>
                </div>
                <span className="text-slate-500">{data.status}</span>
            </div> 
            <Link className="bg-green-700 rounded-md p-2 text-white font-bold block w-full" to={`edit/${data.id}`}>Edit</Link>
            <button onClick={onClickHandler} className="bg-rose-700 cursor-pointer rounded-md p-2 text-white font-bold">Delete</button>
        </div>
    )
}

export default memo(ContactCard);