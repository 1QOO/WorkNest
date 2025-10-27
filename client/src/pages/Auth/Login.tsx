function Login(){
    return (
        <div className="h-screen flex justify-center items-center bg-amber-300">
            <div className="border-2 border-amber-600 rounded-lg bg-white shadow-[0_0_5px_2px_darkgray]">
                <form className="flex flex-col p-4 gap-4 items-center">
                    <label htmlFor="username" className="hidden">Username:</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    className="
                    border-2 border-gray-400 rounded-md
                    px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none" />

                    <label htmlFor="password" className="hidden">Password:</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="
                    border-2 border-gray-400 rounded-md
                    px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none" />

                    <button className="
                    border-2 border-amber-600 rounded-md
                    bg-amber-400 px-4 w-fit
                    font-bold text-amber-600
                    hover:cursor-pointer hover:shadow-[0_0_4px_2px_gray]
                    active:bg-amber-600">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;