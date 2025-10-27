import Calendar from "../../components/Calendar";
import { CardContainer, Card } from "../../components/card";
import List from "../../components/List";

function Dashboard(){
    return(
        <div className="border-2 border-blue-500 rounded-lg w-full bg-white px-4 py-8 overflow-y-auto scroll-mt-12">
            <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
            <Calendar />
            <List title="History" />
        </div>
    )
}

export default Dashboard;