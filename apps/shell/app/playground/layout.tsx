export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="static w-full h-full">
            {children}
        </main>
    )
}