import { Fragment } from "react"
import { AppBar } from "../../components/Shell"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <main>
        Optimize
        {children}
    </main>
    )
}