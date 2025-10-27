function EmployeeTable(){
    return (
        <div className="w-[60%]">
            <input type="search" name="search" id="search" placeholder="Search Employee" className="
            border-2 border-gray-400 rounded-md w-full my-3 px-2
            placeholder:text-gray-300" />
            <div className="p-3 my-3 rounded-lg shadow-[0_0_3px_1px_gray]">
                <h2 className="text-center border-b-2 border-gray-300">Employee List</h2>
                <table className="w-full my-3">
                    <thead>
                        <tr>
                            <th className="border border-black bg-blue-300 w-10 text-center">ID</th>
                            <th className="border border-black bg-blue-300">Name</th>
                            <th className="border border-black bg-blue-300">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(11)].map((_,i)=>{
                            return (
                                <tr className={i%2?"bg-gray-100":""}>
                                    <td className="border border-black text-center">{i}</td>
                                    <td className="border border-black px-1">Employee {i+1}</td>
                                    <td className="border border-black px-1">Employee</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <span className="inline-block w-full text-center font-bold">&lt; &gt;</span>
            </div>
        </div>
    )
}

export default EmployeeTable;