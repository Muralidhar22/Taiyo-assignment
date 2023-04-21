import { Link } from "react-router-dom";
import { useTypedSelector } from "../app/store";
import { selectContactList } from "../features/contact/contactSlice";
import ContactCard from "../components/ContactCard";

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
  
  return (
    <>
        <Link to="create-contact" className="block border-2 p-2">Create contact</Link>
        {contactList.length > 0 
        ? <div className="flex flex-wrap gap-3 my-2">
            {contactList?.map((contact) => <ContactCard key={contact.id} data={contact} />)}
        </div>
        : <EmptyContactMessage />}
    </>
  )   
}

export default Contact;