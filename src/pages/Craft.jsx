import React, { use, useEffect, useState } from "react";
import Button from "../components/Button";

function Craft( {craftItems, setCraftItems, inventory, setInventory} ) {

    const [counterCell, setCounterCell] = useState([0, 0, 0, 0, 0, 0]); // Для картинок ячеек
    const [craftResult, setCraftResult] = useState(null);
    const [choiceItem, setChoiceItem] = useState(null); // Для предметов крафта
    const [choiceCell, setChoiceCell] = useState(null); // Для ячеек крафта

    const onStyle = 'w-[92px] h-[92px] bg-[#ffffff] rounded-[10px]';
    const nonStyle = 'w-[92px] h-[92px] bg-[#1F2937] rounded-[10px]';

    const imageChanger = (id) => {
        if (counterCell[id-1] == 1) {
            return "https://iimg.su/s/07/igkgH4Mx3RFWkpic1irebyiRmsKl69QdBb49ImMZ.png";
        }
        else if(counterCell[id-1] == 2) {
            return "https://iimg.su/s/07/F2moANUPGoOiiKzu3IdTByU5sQOcXvVo8aQGfTh5.png";
        }
    }

    useEffect(() => {
        if(counterCell[0]==1 && counterCell[1]==2){
            setCraftResult("https://i.imgur.com/RC8OpOk.png");
        }
        else {
            setCraftResult(null);
        }
    }, [counterCell]);

    const CraftFunc = () => {
        if(counterCell[0]==1 && counterCell[1]==2) {
            setCraftItems(prev => {
                const prevCraftItems = prev;
                prevCraftItems.tabacco = prevCraftItems.tabacco-1;
                prevCraftItems.paper = prevCraftItems.paper-1;
                return prevCraftItems;
            });
            setInventory(inventory.concat(
                {
                    id: inventory.length+1,
                    name: 'Обычная сигарета',
                    durability: 3,
                    image: "https://i.imgur.com/RC8OpOk.png"
                }
            ));
            setCounterCell(prev => {
                const prevCells = [...prev];
                prevCells[0] = 0;
                prevCells[1] = 0;
                return prevCells;
            });
            alert("Успешный крафт");
            console.log(inventory);
        }
    }

    const ChoiceItems = (id) => {
        setChoiceItem(id);
        if (id == 1 && craftItems.paper >= 1) {
            setCounterCell(prev => {
                const prevCells = [...prev];
                prevCells[choiceCell-1] = 1;
                return prevCells;
            });
            setChoiceCell(null);
        }
        else if (id == 2 && craftItems.tabacco >= 1) {
            setCounterCell(prev => {
                const prevCells = [...prev];
                prevCells[choiceCell-1] = 2;
                return prevCells;
            });
            setChoiceCell(null);
        }
    }

    const ChoiceCell = (id) => {
        setChoiceCell(id);
    }

    const ItemStyleChange = (id) => { // для изменения стиля предметов крафта
        if(choiceItem == id) {
            return onStyle;
        }
        else {
            return nonStyle;
        }
    }

    const CellStyleChange = (id) => { // для изменения стиля ячеек крафта
        if(choiceCell == id) {
            return onStyle;
        }
        else {
            return nonStyle;
        }
    }

    return(
        <div>
            {choiceCell ? (<div className="bg-[#242424] h-[100px] flex justify-center items-center gap-[75px] rounded-[10px]">
                <div className={ItemStyleChange(1)} onClick={() => ChoiceItems(1)}>
                    <img src="https://iimg.su/s/07/igkgH4Mx3RFWkpic1irebyiRmsKl69QdBb49ImMZ.png"/>
                    <div className="text-[#10B981]">{craftItems.tabacco}</div>
                </div>
                <div className={ItemStyleChange(2)} onClick={() => ChoiceItems(2)}>
                    <img src="https://iimg.su/s/07/F2moANUPGoOiiKzu3IdTByU5sQOcXvVo8aQGfTh5.png"/>
                    <div className="text-[#10B981]">{craftItems.paper}</div>
                </div>
            </div>) : <div></div>}
            
            <div className="flex mt-[20px]">
                <div className="grid grid-cols-2 gap-[26px]">
                    <div className={CellStyleChange(1)} onClick={() => ChoiceCell(1)}>
                        <img src={imageChanger(1)}/>
                    </div>
                    <div className={CellStyleChange(2)} onClick={() => ChoiceCell(2)}>
                        <img src={imageChanger(2)}/>
                    </div>
                    <div className={CellStyleChange(3)} onClick={() => ChoiceCell(3)}>
                        <img src={imageChanger(3)}/>
                    </div>
                    <div className={CellStyleChange(4)} onClick={() => ChoiceCell(4)}>
                        <img src={imageChanger(4)}/>
                    </div>
                    <div className={CellStyleChange(5)} onClick={() => ChoiceCell(5)}>
                        <img src={imageChanger(5)}/>
                    </div>
                    <div className={CellStyleChange(6)} onClick={() => ChoiceCell(6)}>
                        <img src={imageChanger(6)}/>
                    </div>
                </div>
                <div>
                    <div className="w-[92px] h-[92px] bg-[#1F2937] ml-[108px] mt-[118px] rounded-[10px]">
                        <img src={craftResult} />
                    </div>
                </div> 
            </div>
            
            <Button currentMenu={'craft'} func={CraftFunc}/>
        </div>
    );
}

export default Craft;