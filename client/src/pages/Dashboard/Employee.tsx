import { Button, ButtonContainer } from "../../components/Button";
import EmployeeProfile from "../../components/EmployeeProfile";
import EmployeeTable from "../../components/EmployeeTable";

function Employee(){
    return(
        <div className="
        border-2 border-blue-500 rounded-lg w-full
        bg-white p-4 overflow-y-auto">
            <div className=" flex flex-row flex-wrap w-full">
                <EmployeeTable />
                <EmployeeProfile />
            </div>
            <ButtonContainer>
                <Button />
                <Button />
                <Button />
            </ButtonContainer>
        </div>
    )
}

export default Employee;