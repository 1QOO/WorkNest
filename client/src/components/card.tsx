interface children{
    children: React.ReactNode[]
}

export function Card(){
    return (
        <div className="w-fit px-3 pt-3 text-center rounded-lg shadow-[0_0_3px_1px_gray]">
            <div className="h-[150px] w-[150px] bg-gray-300"></div>
            <span>Card</span>
        </div>
    )
}

export function CardContainer({children}: children){
    return (
        <div className="flex flex-row w-full justify-evenly">
            {children}
        </div>
    )
}