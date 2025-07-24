/*import React from "react";
import { Sidebar } from "lucide-react";
 
export default function AdminLayout ({children}){
    return(
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}*/
import React from "react";
import SideBar from "../common/SideBar"; // Adjust the path as needed

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
    </div>
  );
};

export default AdminLayout;
