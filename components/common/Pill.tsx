import { PillProps } from "@/interfaces";
import React from "react";

const Pill: React.FC <PillProps> = ({label, active = false, onClick }) => {
 return (
    <span
     onClick={() => onClick?.(label)}
     className={`px-4 py-2 rounded-full text-sm cursor-pointer transition duration-200 ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400" }`}
    >
        {label}
    </span>
 )
}


export default Pill;