import React, { Fragment } from 'react';
import { AppBar } from '../../components/Shell';

const leaves = [
    {
        name: "Virtual Machines",
        target: "/collectors/vm",
        icon: 'precision_manufacturing'
    },
    {
        name: "Target Machines",
        target: "/collectors/targets",
        icon: 'dns'
    },
    {
        name: "Usage Monitoring",
        target: "/collectors/usage",
        icon: 'data_usage'
    },
    {
        name: "Automation",
        target: "/collectors/automation",
        icon: 'model_training'
    },
    {
        name: "Sites",
        target: "/collectors/sites",
        icon: 'language'
    }
]


export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <Fragment>


        <section>

            <header>
                <h1>Debundle</h1>
            </header>
            <main>
                {children}
            </main>
        </section>
        </Fragment>
    )
}