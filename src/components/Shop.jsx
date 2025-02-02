import { useEffect,useState } from "react";
import { MonsterCard } from "./MonsterCard";


export  function Shop ({fullMonsterIndexList})  {
  const MonsterCardsList = fullMonsterIndexList.map(monster=>{
    return (<MonsterCard monster={monster} key={monster}/>)
  })


  /*const [monstersData,setMonstersData] = useState([null])


  
  useEffect(()=>{
    const fetchMonsters = async () => {
      try{
        const fetches = fullMonsterIndexList.map(monster=>
          fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`,{mode:"cors"})
          .then(response=>response.json())
        )
        const responses = await Promise.all(
          [...fetches]
        )
        setMonstersData([...responses])
      }
      catch(err){
        console.error(err)
      }
    }

    fetchMonsters()



  },[])
  */


  return (
    <div>
      <h1>Shop</h1>
      {MonsterCardsList}
    </div>
  );
};
