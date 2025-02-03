import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";
import styles from "./styles/App.module.css"

function App() {
  const [fullMonsterIndexList,setFullMonsterIndexList] = useState([""])
  const {name} = useParams();

  
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
    <mainWrapper className={styles.wrapper}>
    <header className={styles.header}>
          <Link className={styles.headerButton} to="../">Home</Link>
          <Link className={styles.headerButton} to="../shop">Shop</Link>
          <Link className={styles.headerButton}>Chart</Link>
    </header>


    <main>
    {name === "shop" ? (<Shop fullMonsterIndexList={fullMonsterIndexList}/>) : <Home/>}
    </main>

      
    </mainWrapper>
  );
}

export default App;
