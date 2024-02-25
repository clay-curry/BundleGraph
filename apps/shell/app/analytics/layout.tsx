import { Fragment } from "react"
import { AppBar } from "../SideNav"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <main>
        {children}
    </main>
    )
}