import Progressbar from "../components/ProgressBar";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function Main({inventory, balance, setBalance, setInventory, craftItems, setCraftItems}) {

    useEffect(() => {
        if (indexItem >= inventory.length) {
        setIndexItem(inventory.length - 1);
    }
    }, [inventory]);

    const [indexItem, setIndexItem] = useState(1);

    const activeItem = inventory[indexItem];
    const prevItem = inventory[indexItem-1];
    const postItem = inventory[indexItem+1];

    const changeActiveItem = (val) => {
        if (val==1) {
            setIndexItem(indexItem-1);
        }
        else if (val==2) {
            setIndexItem(indexItem+1);
        }
    }

    const [isSmoking, setSmoking] = useState(false);
    const [progressSmoke, setProgressSmoke] = useState(0);

    const Smoke = () => {
        if (isSmoking) return;

        if(activeItem.durability == 0) {
            setInventory(prevInventory => prevInventory.filter((_, index) => index !== indexItem));
            setCraftItems(prev => {
                const prevCraftItems = prev;
                prevCraftItems.tabacco = prevCraftItems.tabacco+0.5;
                prevCraftItems.paper = prevCraftItems.paper+0.5;
                return prevCraftItems;
            });
            setIndexItem(0);
            return;
        }

        setSmoking(true);
        setProgressSmoke(0);
      
        const interval = setInterval(() => {

            setProgressSmoke(prevProgress => {
                if (prevProgress >= 100) {
                    setProgressSmoke(0);
                    setSmoking(false);
                    setBalance(balance + 1);
                    setInventory(prevInventory => prevInventory.map((item, index) => 
                        index === indexItem ? {...item, durability: item.durability-0.5} : item
                    ));
                    clearInterval(interval);
                    return;
                }

            return prevProgress + 10;

            });

            console.log(progressSmoke);
            
            return;
        }, 100);
    }

    return(
        <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-row">

                {inventory[indexItem-1] ? (
                    <div key={inventory[indexItem-1].id} className="flex w-[210px] h-[210px] bg-[#0f131a] mt-[57px] rounded-[40px] ml-[20px]" onClick={() => changeActiveItem(1)}>
                        <img src={inventory[indexItem-1].image} />
                    </div>  
                ) : <div></div>}
                
                {inventory[indexItem] ? (
                    <div key={activeItem.id} className="flex w-[210px] h-[210px] bg-[#1F2937] mt-[57px] rounded-[40px] ml-[20px]">
                        <img src={activeItem.image} />
                    </div> 
                ) : <div></div>}
                
                
                {inventory[indexItem+1] ? (
                    <div key={inventory[indexItem+1].id} className="flex w-[210px] h-[210px] bg-[#0f131a] mt-[57px] rounded-[40px] ml-[20px]" onClick={() => changeActiveItem(2)}>
                        <img src={inventory[indexItem+1].image} />
                    </div> 
                ) : <div></div>}
                

            </div>
            
            {activeItem ? (
                <div className="text-[#10B981] mt-[15px]">Тяжки сиги: {activeItem.durability}</div>
            ) : null}
            <Progressbar smokeProgress={progressSmoke}/>

            <Button currentMenu={'main'} func={Smoke}/>
        </div>
    );
}

export default Main;