import { Link } from "react-router-dom";
import { useTypedSelector } from "../app/store";
import { selectContactList } from "../features/contact/contactSlice";

const EmptyContactMessage = () => {
    return(
        <>
            <div className="p-2 border-2">
                No Contact Found Please add contact form Create Contact Button
            </div>
        </>
    )
} 

const Contact = () => {
  const contactList = useTypedSelector(selectContactList)
  
  console.log({contactList})
  
  return (
    <>
    <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png " alt="" />
        <Link to="create-contact" className="block border-2 p-2">Create contact</Link>
        {contactList.length > 0 
        ? <></>
        : <EmptyContactMessage />}
    </>
  )   
}

export default Contact;