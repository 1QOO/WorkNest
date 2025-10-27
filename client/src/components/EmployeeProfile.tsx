export function EmployeeProfile(){
    return (
        <div className="my-3 mx-auto self-start px-3 pt-3 text-center rounded-lg shadow-[0_0_3px_1px_gray]">
            <div className="text-center">
                <img
                src="default-photo.jpeg"
                alt="photo_profile"
                className="size-fit border-2 border-gray-400 m-auto" />
                <span className="inline-block w-full border-b-2 border-gray-400">Employee</span>
            </div>
            <div>
                <table className="my-4 text-left">
                    <tr className="bg-blue-300">
                        <th className="px-2">ID</th>
                        <td className="px-2">Employee ID</td>
                    </tr>
                    <tr>
                        <th className="px-2">Name</th>
                        <td className="px-2">Employee Name</td>
                    </tr>
                    <tr className="bg-blue-300">
                        <th className="px-2">Position</th>
                        <td className="px-2">Employee Position</td>
                    </tr>
                    <tr>
                        <th className="px-2">Performance</th>
                        <td className="px-2">Employee Performance</td>
                    </tr>
                    <tr className="bg-blue-300">
                        <th className="px-2">Salary</th>
                        <td className="px-2">Employee Salary</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default EmployeeProfile;