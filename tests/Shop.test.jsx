import {render,screen,fireEvent} from "@testing-library/react"
import {Shop} from "./../src/components/Shop.jsx"
import { expect } from "vitest"
import userEvent from "@testing-library/user-event";


test("Test Home",()=>{
    render( <Shop 
        fullMonsterIndexList={["Aboleth"]} 
        addToChart={(el)=>{el}}
        />)
    expect(screen.getByText("Shop")).toBeInTheDocument()
})