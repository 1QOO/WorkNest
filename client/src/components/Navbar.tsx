
import { NavLink } from "react-router";

function Navbar(){
    return(
        <div className="
        w-[20%] h-full bg-white p-3
        border-2 border-blue-500 rounded-lg">
            <div className="text-center">
                <img
                src="default-photo.jpeg"
                alt="photo_profile"
                className="
                size-[150px] m-auto
                border-2 border-gray-400 rounded-full" />
                <span>Name</span>
            </div>
            <nav className="flex flex-col my-8">

                <NavLink
                to="/dashboard"
                className={({isActive})=>{
                    const style = "px-2 hover:bg-gray-300 hover:font-bold";
                    return isActive?"bg-gray-300 px-2":style
                }}>Dashboard</NavLink>

                <NavLink
                to="/employee"
                className={({isActive})=>{
                    const style = "px-2 hover:bg-gray-300 hover:font-bold";
                    return isActive?"bg-gray-300 px-2":style
                }}>Employee</NavLink>

                <NavLink
                to="/schedule"
                className={({isActive})=>{
                    const style = "px-2 hover:bg-gray-300 hover:font-bold";
                    return isActive?"bg-gray-300 px-2":style
                }}>Schedule</NavLink>

            </nav>
        </div>
    )
}

export default Navbar;