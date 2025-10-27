interface ListProp{
    title: string
}

function List({title}: ListProp){
    return (
        <div className="w-full p-3 my-6 rounded-lg shadow-[0_0_3px_1px_gray]">
            <h2>{title}:</h2>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
            <div className="h-6 my-2 w-full bg-gray-300"></div>
        </div>
    )
}

export default List;