import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

function DashboardLayout(){
    return (
        <div className="flex flex-row bg-blue-300 h-screen p-3 gap-3">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout;