import { Fragment } from "react"
import { AppBar } from "../../components/SideNav"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <main>
        {children}
    </main>
    )
}