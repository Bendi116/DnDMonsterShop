import {render,screen,fireEvent} from "@testing-library/react"
import {Home} from "./../src/components/Home.jsx"
import { expect } from "vitest"
import userEvent from "@testing-library/user-event";


test("Test Home",()=>{
    render(<Home/>)
    expect(screen.getByText("Hello Adventurer")).toBeInTheDocument()
    expect(screen.getByText("You look like who need some real monster")).toBeInTheDocument()
})