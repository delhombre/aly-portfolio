import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = () => {
			return setTimeout(() => {
				document.querySelector(".counter").style.setProperty("--num", 100);
			}, 1000);
		};

		timer();

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const timer = () => {
			return setTimeout(() => {
				setLoading((l) => !l);
			}, 5000);
		};

		timer();

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Head>
						<title>Aly Traoré</title>
						<meta
							name="description"
							content="Aly Traoré photographe fototala"
						/>
						<link rel="icon" href="/favicon.ico" />
						<meta
							name="viewport"
							content="width=device-width, user-scalable=no, initial-scale=1, viewport-fit=cover"
						/>
					</Head>
					<Component {...pageProps} />
				</>
			)}
		</>
	);
}

export default MyApp;
