import { Fragment } from "react"
import { AppBar } from "../SideNav"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        
        <Fragment>



        <section>
            <header>
                <h1>Analytics, cool!</h1>
            </header>
            <main>
                {children}
            </main>
        </section>

        </Fragment>
    )
}