import { useEffect, useMemo, useState } from 'react';
import { Link, useActionData, useParams } from 'react-router-dom';
import { Home } from './components/Home.jsx';
import { Shop } from './components/Shop.jsx';
import styles from './styles/App.module.css';

function App() {
    //var that store the possible API indexes for later queries
    const [fullMonsterIndexList, setFullMonsterIndexList] = useState(['']);
    const [showChart, setShowChart] = useState(false);
    //chart current elements 
    const [chartEl,setChartEL] = useState([])
    const { name } = useParams();
    console.log("rendered elements:",chartEl)

    //debug DELETE!!
    useEffect(()=>{
        console.log("MOUNTED")
        return ()=> {console.log("UNMOUNTED")}
    },[])

    //fetch API data to get the main indexes fot later specific fetches
    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/monsters', { mode: 'cors' })
            .then((response) => response.json())
            .then((response) => {
                const monstersTmp = [];
                response.results.forEach((monster) =>
                    monstersTmp.push(monster.index)
                );
                setFullMonsterIndexList([...monstersTmp]);
            })
            .catch((err) => console.log(err));
    }, []);

   
    //add to chart function
    function addToChart(el){
        setChartEL(chartEl=>{
            if(chartEl.some((_el)=> _el.name===el.name)){
                return chartEl.map((_el)=>
                    _el.name===el.name ? 
                        {..._el,count:_el.count+1}
                        :_el
                )
            }
            else{
               return [...chartEl,el]
        }})
    }

    function removeFromChar(el){
        if(el.count==1){
            setChartEL(chartEl=>chartEl.filter((_el)=>_el.name!==el.name))
        }else{
            setChartEL(chartEl=>chartEl.map((_el)=>_el.name===el.name?{...el,count:el.count-1}:_el))

        }

    }

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link className={styles.headerButton} to="../">
                    Home
                </Link>
                <Link className={styles.headerButton} to="../shop">
                    Shop
                </Link>
                <Link
                    className={styles.headerButton}
                    onClick={() => setShowChart(!showChart)}
                >
                    Chart
                </Link>
            </header>

            <main>
                {name === 'shop' ? (
                    <Shop fullMonsterIndexList={fullMonsterIndexList} 
                    addToChart={(el)=>addToChart(el)}
                    />
                ) : (
                    <Home />
                )}
            </main>

           <Chart  showChart={showChart} chartEl={chartEl} removeFromChar={removeFromChar}/>
        </div>
    );
}

export default App;



function Chart({showChart ,chartEl,removeFromChar}){
    const chartList =  chartEl.map(
                        (el)=> <ChartEl data={el} key={el.name} removeFromChar={removeFromChar}/>
    )   

    return (
        <div
        className={styles.chart}
        style={{ visibility: showChart ? 'visible' : 'hidden' }}
    >
    {chartList}
    </div>
    )
}


function ChartEl({data,removeFromChar}){
    return(
        <div key={data.name} className={styles.chartEl}>
            <div className={styles.chartElContainer}>
                <img className={styles.chartElImg} src={data.url} alt={data.name} />
                <div className={styles.chartELData}> 
                    <h2>{data.name}</h2>
                   <h3>{data.count} * {data.price} = {data.count * data.price}
                   </h3>
                </div>
                <button className={styles.chartElRemove} onClick={()=>removeFromChar(data)}>Remove</button>
            </div>
        </div>
    )
}