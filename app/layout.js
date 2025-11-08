import "./globals.css";

export const metadata = {
    title: "The ALCHXMY Studio",
    description: "Transforming brands one experience at a time.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
