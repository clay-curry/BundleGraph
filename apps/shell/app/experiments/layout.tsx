import { AppBar } from "../SideNav"

const leaves = [
    {
        name: "Scheduler",
        target: "/schedule",
        icon: 'event_upcoming'
    },
    {
        name: "Fixtures",
        target: "",
        icon: 'bug_report'
    },
    {
        name: "Metrics",
        target: "",
        icon: 'bar_chart_4_bars'
    },
    {
        name: "Continuous Scanning",
        target: "",
        icon: 'flutter_dash'
    },

]





export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}