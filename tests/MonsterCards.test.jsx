import {render,screen,fireEvent, findByText} from "@testing-library/react"
import {MonsterCard} from "./../src/components/MonsterCard.jsx"
import { expect } from "vitest"
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";


test("Test Home",async ()=>{
    render(<MonsterCard
            monster={"aboleth"}
            addToChart={()=>{}}
    />)
    expect(await screen.findByText("Aboleth")).toBeInTheDocument()
})