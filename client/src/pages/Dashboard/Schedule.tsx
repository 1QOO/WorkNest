import Calendar from "../../components/Calendar";
import List from "../../components/List";

function Schedule(){
    return (
        <div className="
        border-2 border-blue-500 rounded-lg w-full
        bg-white p-4 overflow-y-auto">
            <Calendar />
            <List title="Upcoming Schedules" />
        </div>
    )
}

export default Schedule;