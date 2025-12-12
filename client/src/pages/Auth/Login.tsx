import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Inputs } from "../../lib/type/types";
import useAuth from "../../lib/hooks/useAuth";

function Login(){
    const {setUser} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const navigate = useNavigate();
    
    const onSubmit: SubmitHandler<Inputs> = async(data)=>{
        try{
            const response = await fetch('/api/login',{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if(!response.ok) throw errors;

            const user = await response.json();
            setUser(user);
            navigate("/dashboard");
        }catch{
            console.log(`Error: ${errors}`)
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-amber-300">
            <div className="border-2 border-amber-600 rounded-lg bg-white shadow-[0_0_5px_2px_darkgray]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 gap-4 items-center">

                    <label htmlFor="email" className="hidden">Username:</label>
                    <input
                    type="text"
                    placeholder="Email"
                    className="
                    border-2 border-gray-400 rounded-md
                    px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none"
                    {...register("email")} />

                    <label htmlFor="password" className="hidden">Password:</label>
                    <input
                    type="password"
                    placeholder="Password"
                    className="
                    border-2 border-gray-400 rounded-md
                    px-1
                    placeholder:text-gray-400
                    hover:border-amber-600
                    focus:border-amber-600 focus:outline-none"
                    {...register("password", {
                        required: true
                    })} />
                    {errors.password && <span>Password is requred.</span>}

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