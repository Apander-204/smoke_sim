import { act, useState } from "react";
import Button from "../components/Button";

function Shop( {inventory, setInventory, balance, setBalance} ) {

    const [items, setItems] = useState([
        {
            id: 1,
            price: 10,
            name: 'Обычная сигарета',
            image: "https://i.imgur.com/RC8OpOk.png"
        },
        {
            id: 2,
            price: 10,
            name: 'Редкая сигарета',
            image: "https://s.iimg.su/s/19/xpetSWTyxwbOtiR3lwT11PqacT2EsIInSM1O2BY0.png"
        },
        {
            id: 3,
            price: 10,
            name: 'Эпическая сигарета',
            image: "https://s.iimg.su/s/19/9MRHjB7rYoQv5F7ETz6Xv8EGTtcM3iqMFG4dUDyR.png"
        },
        {
            id: 4,
            price: 10,
            name: 'Легендарная сигарета',
            image: "https://s.iimg.su/s/19/c47ezUttddzLOSBGSgdkxhQ2ExYun0f7kysJMFmA.png"
        }
    ]);

    const [activeItem, setActiveItem] = useState(null);

    const choiceItem = (id) => {
        setActiveItem(id);
    }

    const noActiveStyle = "w-[148px] h-[148px] bg-[#1F2937] rounded-[25px] mt-[25px]";
    const activeStyle = "w-[148px] h-[148px] bg-[#ffffff] rounded-[25px] mt-[25px]";

    const buyItem = () => {
        if (activeItem) {
            if(balance >= items[activeItem-1].price) {
                setBalance(balance-items[activeItem-1].price);
                setInventory(inventory.concat(
                    {
                    id: inventory.length+1,
                    name: 'Обычная сигарета',
                    durability: 3,
                    image: "https://i.imgur.com/RC8OpOk.png"
                    }
                ));
                alert(activeItem)
            }
            else{
                alert("Недостаточно средств");
            } 
        }
    }

    return(
        <div>
            {activeItem ? (
                <div className="bg-[#242424] h-[100px] flex justify-center items-center gap-[75px] rounded-[10px]">
                    <h3 className="text-[#10B981]">{items[activeItem-1].name}</h3>
                    <h3 className="text-[#10B981]">Цена: {items[activeItem-1].price}</h3>
                </div>
            ) : null}
            <div className="grid grid-cols-2 gap-x-[88px]">
               {items.map(item => item.id===activeItem ?
               (
                <div>
                    <div key={item.id} className={activeStyle} onClick={() => choiceItem(item.id)}>
                        <img src={item.image} />
                    </div>   
                </div>
                    
                )
                :
                (
                    <div key={item.id} className={noActiveStyle} onClick={() => choiceItem(item.id)}>
                        <img src={item.image} />
                    </div> 
                )
            )} 
            </div>
            
            <Button currentMenu={'shop'} func={() => buyItem()}/>
        </div>
    );
}

export default Shop;