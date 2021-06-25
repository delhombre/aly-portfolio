import Link from "next/link";
import React from "react";

const Menu = () => {
	return (
		<>
			<div className="menu-wrapper">
				<div className="menu-container">
					<nav className="nav">
						<div className="home">
							<div className="number">01</div>
							<Link href="/">
								<a className="link">Accueil</a>
							</Link>
						</div>
						<div className="about">
							<div className="number">02</div>
							<Link href="/a-propos">
								<a className="link">À propos</a>
							</Link>
						</div>
						<div className="appointment">
							<div className="number">03</div>
							<Link href="/prendre-rendez-vous">
								<a className="link">RDV</a>
							</Link>
						</div>
					</nav>
					<div className="social-medias">
						<a href="#" className="mb">
							Instagram
						</a>
						<a href="#" className="mb">
							Facebook
						</a>
						<a href="#">Twitter</a>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.menu-wrapper {
					position: fixed;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					background-color: var(--main-color);
					color: var(--second-color);
					z-index: 9998;
				}

				.menu-container {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 var(--magnetic-margin);
					height: 100%;
					position: relative;
				}

				.nav {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
				}

				.home,
				.about,
				.appointment {
					padding-left: calc((34 / var(--sc)) * var(--fs));
					margin-bottom: calc((28 / var(--sc)) * var(--fs));
					position: relative;
				}

				.appointment {
					margin-bottom: initial;
				}

				.number {
					position: absolute;
					font-size: calc((14 / var(--sc)) * var(--fs));
					position: absolute;
					top: calc((20 / var(--sc)) * var(--fs));
					left: 0;
					white-space: pre;
					overflow: hidden;
				}

				.link {
					text-transform: uppercase;
					font-family: "aly";
					font-size: calc((118 / var(--sc)) * var(--fs));
					-webkit-text-stroke: 1px var(--second-color);
					-webkit-text-fill-color: var(--main-color);
					transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1);
					display: block;
					white-space: pre;
					overflow: hidden;
				}

				.link span {
					display: inline-block;
				}

				.link:hover {
					-webkit-text-stroke: none;
					-webkit-text-fill: none;
				}

				.social-medias {
					position: absolute;
					bottom: var(--magnetic-margin);
					left: 0;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					font-size: calc((14 / var(--sc)) * var(--fs));
					text-transform: uppercase;
					width: 100%;
					padding: 0 var(--magnetic-margin);
				}

				.mb {
					margin-bottom: calc((13 / var(--sc)) * var(--fs));
				}

				@media screen and (max-width: 768px) {
					.number {
						top: calc((8 / var(--sc)) * var(--fs));
						font-size: calc((12 / var(--sc)) * var(--fs));
					}

					.link {
						font-size: calc((57 / var(--sc)) * var(--fs));
					}
				}

				@media screen and (max-width: 480px) {
					.number,
					.social-medias {
						font-size: 12px;
					}
				}
			`}</style>
		</>
	);
};

export default Menu;
