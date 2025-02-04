import { useEffect,useState ,useMemo} from "react";
import { MonsterCard } from "./MonsterCard";
import styles from "./../styles/Shop.module.css"


export  function Shop ({fullMonsterIndexList})  {
  console.log("Shop rendered")
  const [scrollPosition, setScrollPosition] = useState(0);
  const MonsterCardsList = []
  useMemo(()=>{
    for(let i = 0; i <Math.min(6 + scrollPosition / 100,334) ; ++i){
      MonsterCardsList.push(
        <MonsterCard  monster={fullMonsterIndexList[i]} key={fullMonsterIndexList[i]}/>
      )
      
    }
  },[scrollPosition])
 

  console.log(scrollPosition)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div>
      <h1>Shop</h1>
      <div className={styles.cardContainer}>{MonsterCardsList}</div>
      
    </div>
  );
};
