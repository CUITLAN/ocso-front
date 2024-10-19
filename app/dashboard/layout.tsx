import Header from "./_components/Header";
import Sidebar from "./_components/sidebar/sidebar";
export default function Layout_dashboard({ children,count }: Readonly<{ children: React.ReactNode, count: React.ReactNode }>) {
    return (
        <div className=" bg-orange-50">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}   
                {count} 
            </div>
            
        </div>
    );
}
