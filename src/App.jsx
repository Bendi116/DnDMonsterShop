import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";

function App() {
  const [fullMonsterIndexList,setFullMonsterIndexList] = useState([""])
  const {name} = useParams();

  console.log(fullMonsterIndexList)
  
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters",{mode:"cors"})
      .then((response) => response.json())
      .then((response) => {
        const monstersTmp = []
        console.log(response)
        response.results.forEach(monster=>monstersTmp.push(monster.index))
        setFullMonsterIndexList([...monstersTmp])
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <nav>
          <Link to="../">Home</Link>
    <Link to="../shop">Shop</Link>

      <button>Chart</button>
    </nav>


    <main>
    {name === "shop" ? (<Shop fullMonsterIndexList={fullMonsterIndexList}/>) : <Home/>}
    </main>

      
    </>
  );
}

export default App;
