import React from "react";

function Header({currentMenu, balance}) {
    return(
        <div>
            <div className="w-[500px] h-[100px] bg-[#1F2937] flex items-center justify-center rounded-xl self-start">
                <h1 className="text-[#F3F4F6] text-[64px] text-center font-bold">{currentMenu}</h1>
            </div>
            <div className="mt-[21px]">
                <h1 className="text-[#10B981] text-[32px]">Ваш баланс: {balance}</h1>
            </div>
        </div>
    );
}

export default Header;