interface children{
    children: React.ReactNode[]
}

export function Button(){
    return (
        <button className="
        w-fit shadow-[0_0_3px_1px_gray] rounded-lg bg-blue-600 p-8
        text-center text-white font-bold
        hover:cursor-pointer active:bg-blue-800">
            Button
        </button>
    )
}

export function ButtonContainer({children}: children){
    return (
        <div className="flex flex-row gap-4">
            {children}
        </div>
    )
}