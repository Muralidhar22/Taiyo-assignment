import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <>
           <aside className="hidden md:block z-50 md:z-0 md:fixed md:h-screen overflow-hidden bg-sky-600 items-start left-0 p-2 text-white font-semibold">
                <Link to= "/" className="block mb-2">Contact</Link>
                <Link to="/charts-maps" className="block">Charts and Maps</Link>
           </aside>
           <div className="fixed z-10000 bg-white bottom-0 p-3 border-2 w-full flex md:hidden justify-around">
                <Link to="/">
                    <span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/10410/10410979.png"
                            alt="Contact Management"
                            className="block w-10 h-10"
                        />
                    </span>
                </Link>
                <Link to="/charts-maps">
                    <span>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/457/457345.png"
                            alt="Charts and Maps"
                            className="block w-10 h-10"
                        />
                    </span>
                </Link>
           </div>
        </>
    )
}

export default Navigation;