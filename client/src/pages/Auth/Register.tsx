function Register(){
    return (
        <div className="h-screen flex justify-center items-center bg-amber-300">
            <div className="border-2 border-amber-600 rounded-lg bg-white shadow-[0_0_5px_2px_darkgray]">
                <h1 className="border-b-2 border-amber-600 text-center p-2 mx-4 text-2xl font-bold">Registration</h1>
                <form className="flex flex-col p-4">
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    className="
                    border-2 border-gray-400 rounded-md
                    mb-4 px-1 
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none" />

                    <label htmlFor="role">Role:</label>
                    <select name="role" id="role" required
                    className="
                    border-2 border-gray-400 rounded-md
                    mb-4 
                    hover:border-2 hover:border-amber-600
                    focus:outline-none">
                        <option></option>
                        <option>Kasir</option>
                        <option>Head Store</option>
                    </select>

                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="
                    border-2 border-gray-400 rounded-md
                    mb-2 px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none" />

                    <label htmlFor="re-input-password" className="hidden">Re-input Password:</label>
                    <input
                    type="password"
                    name="re-password"
                    id="re-password"
                    placeholder="Re-input Password"
                    required
                    className="
                    border-2 border-gray-400 rounded-md
                    mb-4 px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none" />

                    <button className="
                    border-2 border-amber-600 rounded-md
                    bg-amber-400 mx-auto my-4 px-4 w-fit
                    font-bold text-amber-600
                    hover:cursor-pointer hover:shadow-[0_0_4px_2px_gray]
                    active:bg-amber-600">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;