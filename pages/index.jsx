import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Copyright from "../components/Copyright";

const array = [
	{
		label: "Alif Ngoylung",
		image:
			"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
	},
	{
		label: "Dirk Martins",
		image:
			"https://images.unsplash.com/photo-1559661184-5abf47a433a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
	},
	{
		label: "Nathan Costa",
		image:
			"https://images.unsplash.com/photo-1616213920696-c678876f3898?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
	},
	{
		label: "Abrahan Echeverria",
		image:
			"https://images.unsplash.com/photo-1616101629447-247fd4d5a7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
	},
	{
		label: "Bofu Shaw",
		image:
			"https://images.unsplash.com/photo-1596188253603-f514abe6037f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	},
];

export default function Home() {
	const image = useRef();

	const [increment, setIncrement] = useState(0);

	useEffect(() => {
		const time = 5000;
		let i = 0;
		setInterval(() => {
			image.current.style.backgroundImage = `url(${array[i].image})`;

			if (i < array.length - 1) {
				i++;
			} else {
				i = 0;
			}
		}, time);
	}, []);

	return (
		<>
			<Head>
				<title>Aly Traoré</title>
				<meta name="description" content="Aly Traoré photographe fototala" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<div className="header-right">
					<span className="menu">Menu</span>
				</div>
			</header>

			<main>
				<div className="typography">
					<h1>Capturer la lumière de la plus belle des manières</h1>
				</div>
				<div className="slider">
					<a href="#" ref={image}></a>
				</div>
			</main>

			<footer>
				<div className="footer-left">
					<button className="button catalog-toggle">
						<span className="icon">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</span>
						<span className="catalog-label">Catalogue</span>
					</button>
				</div>
				<div className="footer-right">
					<Copyright />
				</div>
			</footer>

			<style jsx>
				{`
					.header-right,
					.footer-left,
					.footer-right {
						position: fixed;
					}

					.header-right {
						top: 3vw;
						right: 5vw;
					}

					.header-right .menu {
						color: var(--main-color);
						text-transform: uppercase;
						font-size: calc(16 * var(--rfs));
						cursor: pointer;
					}

					.footer-left,
					.footer-right {
						bottom: 3vw;
					}

					.footer-left {
						left: 3vw;
					}

					.footer-left .icon {
						position: relative;
						width: 1.1rem;
						height: 1.1rem;
					}

					.dot {
						width: 4px;
						height: 4px;
						background-color: currentColor;
						position: absolute;
						border-radius: 50%;
					}

					.dot:first-of-type {
						top: 0;
						left: 0;
					}

					.dot:nth-child(2) {
						top: 0;
						right: 0;
					}

					.dot:nth-child(3) {
						bottom: 0;
						left: 0;
					}

					.dot:nth-child(4) {
						bottom: 0;
						right: 0;
					}

					.footer-right {
						right: 3vw;
					}

					.button {
						border: none;
						appearance: none;
						background: 0, 0;
						border-radius: 0;
						outline: none;
						cursor: pointer;
						font-family: "helvetica", sans-serif;
					}

					.catalog-toggle {
						padding: 1rem;
						box-sizing: content-box;
						display: flex;
						align-items: center;
						color: var(--main-color);
					}

					.catalog-label {
						position: absolute;
						left: 3rem;
						font-size: calc(16 * var(--rfs));
						text-transform: uppercase;
					}

					main {
						height: 100vh;
						width: 100vw;
						position: relative;
					}

					.typography {
						height: 100%;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.typography h1 {
						z-index: 2;
						mix-blend-mode: difference;
						color: #000;
					}

					.slider {
						width: 200px;
						height: 300px;
						position: absolute;
						bottom: auto;
						top: calc(50vh - 15rem);
						right: 10vw;
					}

					.slider a {
						display: block;
						width: 100%;
						height: 100%;
						background-position: center;
						background-size: cover;
					}
				`}
			</style>
		</>
	);
}
