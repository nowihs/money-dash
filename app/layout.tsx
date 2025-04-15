import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Sen } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ibm-plex-serif'
});

const senFont = Sen({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-sen'
});

export const metadata: Metadata = {
    title: "$MoneyDash",
    description: "Money Dash is a proof-of-concept banking platform for organizing all your finances in one app",
    icons: {
        icon: '/icons/logo.svg'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${ibmPlexSerif.variable} ${senFont.variable}`}>
                {children}
            </body>
        </html>
    );
}
