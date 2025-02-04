import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";
import styles from "./styles/App.module.css"

function App() {
  const [fullMonsterIndexList,setFullMonsterIndexList] = useState([""])
  const {name} = useParams();
  const [showChart,setShowChart] = useState(false)
  
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters",{mode:"cors"})
      .then((response) => response.json())
      .then((response) => {
        const monstersTmp = []
        response.results.forEach(monster=>monstersTmp.push(monster.index))
        setFullMonsterIndexList([...monstersTmp])
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.wrapper}>
    <header className={styles.header}>
          <Link className={styles.headerButton} to="../">Home</Link>
          <Link className={styles.headerButton} to="../shop">Shop</Link>
          <Link className={styles.headerButton} onClick={()=>setShowChart(!showChart)}>Chart</Link>
    </header>


    <main>
    { name === "shop" ? (<Shop fullMonsterIndexList={fullMonsterIndexList}/>) : <Home/>
  }
    </main>

    <div className={styles.chart} style={{visibility: showChart ? "visible" : "hidden"}}>Chart</div>

      
    </div>
  );
}

export default App;
