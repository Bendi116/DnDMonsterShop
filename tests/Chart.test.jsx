import {render,screen,fireEvent} from "@testing-library/react"
import {Chart} from "./../src/App.jsx"
import { expect } from "vitest"

/*showChart={showChart} chartEl={chartEl} removeFromChar={removeFromChar} purchaseMonsters={purchaseMonsters} increaseMonsterCount={increaseMonsterCount} chartAnimationStyle={chartAnimationStyle}*/
test("Test Home",()=>{
    render(<Chart
            
        showChart={true}
        chartEl={[{name:"alma",url:undefined,count:1,price:100}]}
        removeFromChar={()=>{}}
        purchaseMonsters={()=>{}}
        increaseMonsterCount={()=>{}}
            
            />)
    expect(screen.getByText("alma")).toBeInTheDocument()
})