import React from "react";

function Navbar({currentMenu, setCurrentMenu}) {

  const butSetMenu = (menu) => {
    setCurrentMenu(menu);
  }

  const buttonStyle = (menu) => {
    return menu==currentMenu ? 'w-[136px] h-[35px] rounded-[36px] bg-[#6366F1] hover:scale-105 text-[#F9FAFB]' : 'w-[136px] h-[35px] rounded-[36px] bg-[#10B981] hover:scale-105 text-[#F9FAFB]';
  };

  return(
    <div className="w-[500px] h-[100px] bg-[#1F2937] flex items-center justify-center rounded-xl gap-5 mt-[40px]">
        <button onClick={() => butSetMenu('craft')} className={buttonStyle('craft')}>Крафт</button>
        <button onClick={() => butSetMenu('main')} className={buttonStyle('main')}>Главная</button>
        <button onClick={() => butSetMenu('shop')} className={buttonStyle('shop')}>Магазин</button>
    </div>
  );
}

export default Navbar;