import Head from "next/head";
import { useState } from "react";
import IndexMain from "../components/IndexMain";
import Menu from "../components/Menu";

const Home = () => {
	const [isActive, setActive] = useState(false);

	const handleToggleMenu = () => {
		setActive(!isActive);
	};

	return (
		<>
			<Head>
				<title>Aly Traoré</title>
				<meta name="description" content="Aly Traoré photographe fototala" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu isActive={isActive} />
			<header>
				<div className="header-right">
					<button
						className="menu"
						onClick={handleToggleMenu}
					>
						{!isActive ? "menu" : "fermer"}
					</button>
				</div>
			</header>

			<IndexMain />

			<footer>
				<div className="footer-left">
					<button className="catalog">
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
					<span className="copyright">© {new Date().getFullYear()}</span>
				</div>
			</footer>

			<style jsx>{`
				header {
					display: flex;
					position: fixed;
					left: 0;
					right: 0;
					justify-content: flex-end;
					text-transform: uppercase;
					margin: var(--magnetic-margin);
					z-index: 3;
				}

				button {
					border: none;
					appearance: none;
					background: 0, 0;
					border-radius: 0;
					outline: none;
					cursor: pointer;
					text-transform: uppercase;
					font-family: "Knockout", sans-serif;
				}

				.menu,
				.catalog-label,
				.copyright {
					font-weight: bold;
					font-size: clamp(15px, 4vw, 22px);
					text-transform: uppercase;
				}

				footer {
					position: fixed;
					bottom: 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					left: 0;
					right: 0;
					margin: var(--magnetic-margin);
					z-index: 3;
				}

				.footer-left .icon {
					position: relative;
					width: 1rem;
					height: 1rem;
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

				.catalog {
					display: flex;
					align-items: center;
					color: var(--main-color);
				}

				.catalog-label {
					position: absolute;
					left: 2rem;
				}
			`}</style>
		</>
	);
};

export default Home;
