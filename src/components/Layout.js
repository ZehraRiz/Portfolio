import React from 'react'
import { NavBar } from "../components"

export const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            {props.children}
        </div>
    )
}


