import React, { useEffect, useState } from "react";

function Button({currentMenu, func}) {

    const [butText, setButText] = useState('Затянуться');

    useEffect(() => {
      switch (currentMenu) {
            case 'main': return setButText('Затянуться')
            case 'craft': return setButText('Скрутить')
            case 'shop': return setButText('Купить')
        }  
    }, [currentMenu])

    return(
        <div>
            <button onClick={() => func()} className="rounded-full w-[153px] h-[153px] bg-[#4B5563] mt-[20px] text-[#F9FAFB] text-[24px] hover:scale-[115%] transition-transform">{butText}</button>
        </div>
    );
}

export default Button;