import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Shi Won', lastName: 'Lee'};

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />
            {children}
        </main>
    );
}
