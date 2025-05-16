import React from "react";
import Header from "./Header";
import Navbar from "./NavBar";

function Layout({children, currentMenu, setCurrentMenu, balance}) {
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center text-center bg-[#0F0F0F]">
            <Header currentMenu={currentMenu} balance={balance}/>
            {children}
            <Navbar currentMenu={currentMenu}  setCurrentMenu={setCurrentMenu}/>
        </div>
    );
}

export default Layout;