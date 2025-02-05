import { useEffect, useState, useMemo } from 'react';
import { MonsterCard } from './MonsterCard';
import styles from './../styles/Shop.module.css';

export function Shop({ fullMonsterIndexList }) {
    //state that used for store the before scrollY value
    const [scrollPosition, setScrollPosition] = useState(0);
    const [monsterCards,setMonsterCards] = useState([])

    //calc value for when to expand monsterCards array
    //!!!should have clarify the algo!!!!
    const calcRelativeSizeFromScrollY = () => {
        return  Math.min(6 + scrollPosition / 100, 334)
    }


    //if the monsterCards size is less than a calulated value that derived from scrollPosition
    //we add nem MonsterCards to the array
    if(monsterCards.length < calcRelativeSizeFromScrollY()){
        const tmp = [...monsterCards]
        for (let i = monsterCards.length; i < calcRelativeSizeFromScrollY(); ++i) {
            tmp.push(
                <MonsterCard
                    monster={fullMonsterIndexList[i]}
                    key={fullMonsterIndexList[i]}
                />
            );
        }
        setMonsterCards([...tmp])
    }


    


    //update scroll
    const handleScroll = () => {
        const position = window.scrollY;
        if(position > scrollPosition) setScrollPosition(position);
    };

    //set event listeners for scroll and mount and remove at unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            <div className={styles.cardContainer}>{monsterCards}</div>
        </div>
    );
}
