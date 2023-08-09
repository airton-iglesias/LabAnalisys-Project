export default function AnaliseCardLoading(){
    return(     
        <tr className="h-auto  border-y-2 border-gray-300">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <div className="w-12 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </div>
            </td>
            <th className="flex items-center px-2 py-4">
                <div  className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="pl-3 text-left">
                    <div className="w-44 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                    <div className="w-44 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                    <div className="w-44 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </div>  
            </th>
            <td className="px-2 py-4 text-center ">
                <span>
                    <div className="w-32 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </span>
            </td>
            <td className="px-2 py-4 text-center">
                <span>
                    <div className="w-32 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </span>
            </td>
            <td className="px-2 py-4 text-center">
                <span>
                    <div className="w-28 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </span>
            </td>
            <td className="px-2 py-4 text-center">
                <span>
                    <div className="w-28 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </span>
            </td>
            <td className="px-2 py-4 text-center">
                <span>
                    <div className="w-32 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
                </span>
            </td>
            <td className="px-6 py-4 w-5">
                <div className="w-12 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
            </td>
            <td className="px-2 py-4 w-4">
                <div className="w-12 h-6 rounded-lg bg-gray-300 animate-pulse"></div>
            </td>
        </tr>
             
    )
}