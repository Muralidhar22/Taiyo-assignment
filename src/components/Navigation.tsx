import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
           <aside className="flex bottom-0 flex-col gap-2 hidden md:block z-50 md:z-0 md:fixed md:h-screen overflow-hidden bg-rose-300 items-start left-0 p-2">
                <Link to= "/contact" className="block mb-2">Contact</Link>
                <Link to="/charts-maps" className="block">Charts and Maps</Link>
           </aside>
        </>
    )
}

export default Navigation;