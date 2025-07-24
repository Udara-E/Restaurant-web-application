import React from "react";
import Navbar from "../common/navbar";
 
export default function MainLayout ({children}){
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}