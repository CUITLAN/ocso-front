import { div } from "framer-motion/client";
import ManagersCard from "./_components/managerCard";
import { ReactNode } from "react";

export default function Layout_Manager ({children}: {children: ReactNode}){

    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90] overflow-hidden overflow-y-auto ">
                <ManagersCard/>
                
            </div>
            <div>
            {children}
            </div>
        </>
    )
}