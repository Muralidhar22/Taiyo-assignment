import { Link } from "react-router-dom";
import { useTypedSelector } from "../app/store";
import { selectContactList } from "../features/contact/contactSlice";
import ContactCard from "../components/ContactCard";

const EmptyContactMessage = () => {
    return(
        <>
            <div className="p-2 border-2 mt-5 flex gap-3 items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3675/3675686.png" alt="wrong icon"  className="w-12 h-12"/>
                No contact found please add contact from create contact button above.
            </div>
        </>
    )
} 

const Contact = () => {
  const contactList = useTypedSelector(selectContactList)
  
  return (
    <>
        <h1 className="mb-5 text-center text-3xl font-bold">Contact Management</h1>
        <Link to="create-contact" className="block border-2 p-2 text-center">Create contact</Link>
        {contactList.length > 0 
        ? <div className="flex flex-wrap gap-3 my-2">
            {contactList?.map((contact) => <ContactCard key={contact.id} data={contact} />)}
        </div>
        : <EmptyContactMessage />}
    </>
  )   
}

export default Contact;