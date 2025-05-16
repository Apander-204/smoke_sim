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
            name: 'Обычная сигарета',
            image: "https://i.imgur.com/RC8OpOk.png"
        },
        {
            id: 3,
            price: 10,
            name: 'Обычная сигарета',
            image: "https://i.imgur.com/RC8OpOk.png"
        },
        {
            id: 4,
            price: 10,
            name: 'Обычная сигарета',
            image: "https://i.imgur.com/RC8OpOk.png"
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
            <div className="grid grid-cols-2 gap-x-[88px]">
               {items.map(item => item.id===activeItem ?
               (
                    <div key={item.id} className={activeStyle} onClick={() => choiceItem(item.id)}>
                        <img src={item.image} />
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