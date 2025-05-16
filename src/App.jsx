import { useState } from 'react'
import Layout from './components/Layout'
import Main from './pages/Main';
import Craft from './pages/Craft';
import Shop from './pages/Shop';

function App() {

  const [balance, setBalance] = useState(10);

  const [currentMenu, setCurrentMenu] = useState("main");

  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: 'Обычная сигарета',
      durability: 3,
      image: "https://i.imgur.com/RC8OpOk.png"
    },
    {
      id: 2,
      name: 'Обычная сигарета',
      durability: 3,
      image: "https://i.imgur.com/RC8OpOk.png"
    },
    {
      id: 3,
      name: 'Обычная сигарета',
      durability: 3,
      image: "https://i.imgur.com/RC8OpOk.png"
    },
  ])

  const [craftItems, setCraftItems] = useState(
    {
      tabacco: 3,
      paper: 3
    }
  );

  const renderPage = () => {
    switch(currentMenu){
      case 'main': return <Main inventory={inventory || []} balance={balance} setBalance={setBalance} setInventory={setInventory} craftItems={craftItems} setCraftItems={setCraftItems}/>
      case 'shop': return <Shop inventory={inventory} setInventory={setInventory} balance={balance} setBalance={setBalance} />
      case 'craft': return <Craft craftItems={craftItems} setCraftItems={setCraftItems} inventory={inventory} setInventory={setInventory}/>
    }
  }

  return (
    <>
      <Layout currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} balance={balance}>
        {renderPage()}
      </Layout>
    </>
  )
}

export default App
