import "@/styles/globals.css";
import "@/styles/types.css";
import Head from "next/head";

export const metadata = {
  title: "Prueba Tecnica Fullstack: PokeAPI",
  description: "Prueba-Tecnica-Fullstack-PokeAPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
