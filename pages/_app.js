import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Aly Traoré</title>
				<meta name="description" content="Aly Traoré photographe fototala" />
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1, viewport-fit=cover"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
