import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
	return (
		<>
			<Layout />

			<main>
				<section className="section-1">
					<h1>
						{["M", "o", "n"].map((l, index) => (
							<span key={index} className="letter-wrapper">
								<span className="letter">{l}</span>
							</span>
						))}{" "}
						<br />
						{["p", "r", "o", "f", "i", "l"].map((l, index) => (
							<span key={index} className="letter-wrapper">
								<span className="letter">{l}</span>
							</span>
						))}
					</h1>
				</section>
				<section className="section-2">
					<div className="container">
						<div className="information-wrapper">
							<div className="information-container">
								<div className="information">
									<span className="contact">
										<div>CONTACT:</div>
									</span>
									<span className="contact">
										<div>BAMAKO, ML</div>
									</span>
									<span className="contact">
										<div>+223 72.19.46.67</div>
									</span>
									<span className="contact">
										<div>ALYRHT@GMAIL.COM</div>
									</span>
								</div>
								<div className="information">
									<span className="contact">
										<div>entreprise:</div>
									</span>
									<span className="contact">
										<div>gnagassadesign</div>
									</span>
								</div>
								<div className="information">
									<span className="contact">
										<div>Photographie:</div>
									</span>
									<span className="contact">
										<div>{"toto l'asticot"}</div>
									</span>
									<span className="contact">
										<div>{"maya l'abeille"}</div>
									</span>
								</div>
							</div>
						</div>
						<div className="profile-image-wrapper">
							<div className="profile-image">
								<Image src="/images/1/lg.jpg" layout="fill" objectFit="cover" />
							</div>
						</div>
					</div>
				</section>
				<section className="section-3">
					<div className="container">
						<div className="description">
							<h2>
								<span>Profil</span>
							</h2>
							<p>
								<span className="text-content">
									<span className="text text-1">Lorem, ipsum dolor.</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet, consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">Lorem ipsum dolor sit amet.</span>
								</span>
								<span className="text-content">
									<span className="text">Lorem, ipsum dolor.</span>
								</span>
							</p>
						</div>
					</div>
				</section>
				<section className="section-4">
					<div className="container">
						<span className="madeIn">Réalisé à</span>
						<div className="bamako">
							{["B", "a", "m", "a", "k", "o"].map((l, index) => (
								<span key={index} className="letter-wrapper">
									<span className="letter">{l}</span>
								</span>
							))}{" "}
						</div>
					</div>
				</section>

				<section className="section-5">
					<div className="container">
						<div className="top-line">
							<div></div>
						</div>
						<div className="infinite-text-wrapper">
							<div className="infinite-text-container">
								<div className="infinite-text">
									Capturer la lumière de la plus belle des manières.&nbsp;
								</div>
								<div className="infinite-text">
									Capturer la lumière de la plus belle des manières.&nbsp;
								</div>
							</div>
						</div>
						<div className="bottom-line">
							<div></div>
						</div>
					</div>
				</section>
				<footer>
					<div className="container">
						<button>Retourner &#8593;</button>
						<div className="copyright">
							Tous les droits de ce site sont réservés
						</div>
						<div className="toHide">©{new Date().getFullYear()}</div>
						<div className="madeBy toHide">
							<a href="#" target="_blank" rel="noopener noreferrer">
								Réalisé par Bruno Dogbase
							</a>
						</div>
						<div className="fullYearAndMadeBy toShow">
							<span>©{new Date().getFullYear()}</span>&nbsp;&nbsp;
							<div className="madeBy">
								<a href="#" target="_blank" rel="noopener noreferrer">
									Réalisé par Bruno Dogbase
								</a>
							</div>
						</div>
					</div>
				</footer>
			</main>

			<style jsx>{`
				main {
					background: inherit;
					--cs: 13.7;
					--dw: 1920;
					--ps: 55;
					--ph: 55;
					--bi: 70;
					--sc: calc((var(--dw) / 100) * var(--cs));
					--fs: 13.7vw;
					--vh: 9.04px;
					font-size: calc((16 / var(--sc)) * var(--fs));
				}

				.section-1 {
					width: 100%;
				}

				.section-1 h1 {
					font-size: calc((343 / var(--sc)) * var(--fs));
					line-height: 0.9;
					padding-top: calc((217 / var(--sc)) * var(--fs));
					padding-bottom: calc((180 / var(--sc)) * var(--fs));
					text-transform: uppercase;
					text-align: center;
					max-height: calc(var(--vh, 1vh) * 93);
					margin-left: calc((13.96 / var(--sc)) * var(--fs));
					min-height: calc((950 / var(--sc)) * var(--fs));
					white-space: pre;
				}

				.letter-wrapper {
					display: inline-flex;
					margin-left: calc((-13.96 / var(--sc)) * var(--fs));
					position: relative;
					overflow: hidden;
				}

				.letter {
					display: inline-block;
				}

				.section-2 {
					margin-bottom: calc((248 / var(--sc)) * var(--fs));
				}

				.section-2 .container {
					display: flex;
					justify-content: space-between;
					padding: 0 3vw;
				}

				.information-wrapper {
					margin-top: calc((205 / var(--sc)) * var(--fs));
				}

				.information-container {
					font-size: calc((30 / var(--sc)) * var(--fs));
					line-height: 1.2;
					display: flex;
					flex-direction: column;
					text-transform: uppercase;
				}

				.information {
					margin-bottom: calc((45 / var(--sc)) * var(--fs));
					overflow: hidden;
					white-space: pre;
				}

				.contact {
					display: block;
					position: relative;
					overflow: hidden;
				}

				.profile-image-wrapper {
					width: calc((1180 / var(--sc)) * var(--fs));
					height: calc((1470 / var(--sc)) * var(--fs));
					overflow: hidden;
				}

				.profile-image {
					width: 100%;
					height: 100%;
					overflow: hidden;
					position: relative;
				}

				.section-3 .container {
					margin-bottom: calc((250 / var(--sc)) * var(--fs));
					padding: 0 3vw;
				}

				.description {
					position: relative;
				}

				.description h2 {
					font-size: calc((18 / var(--sc)) * var(--fs));
					position: absolute;
					top: calc((14 / var(--sc)) * var(--fs));
					left: 0;
					text-transform: uppercase;
				}

				.description h2 span {
					opacity: 0.5;
				}

				.description p {
					font-family: "aly", "helvetica", sans-serif;
					font-size: calc((80 / var(--sc)) * var(--fs));
					line-height: 1.12;
					overflow: hidden;
					white-space: pre;
				}

				.text-content {
					display: block;
					overflow: hidden;
					position: relative;
				}

				.text {
					display: block;
				}

				.text-1 {
					margin-left: calc((475 / var(--sc)) * var(--fs));
				}

				.section-4 {
					margin-bottom: calc((195 / var(--sc)) * var(--fs));
				}

				.section-4 .container {
					text-align: center;
					text-transform: uppercase;
				}

				.madeIn {
					display: block;
					margin-bottom: calc((50 / var(--sc)) * var(--fs));
					font-size: calc((18 / var(--sc)) * var(--fs));
					letter-spacing: calc((2 / var(--sc)) * var(--fs));
				}

				.bamako {
					font-family: "Sang Bleu";
					font-size: calc((300 / var(--sc)) * var(--fs));
					overflow: hidden;
					white-space: pre;
				}

				.section-5 {
					margin-bottom: calc((220 / var(--sc)) * var(--fs));
				}

				.section-5 .container {
					font-family: "aly", "helvetica", sans-serif;
					font-size: calc((80 / var(--sc)) * var(--fs));
					position: relative;
					overflow: hidden;
					padding: calc((28 / var(--sc)) * var(--fs)) 0;
				}

				.top-line {
					position: absolute;
					top: 0;
					left: calc((93 / var(--sc)) * var(--fs));
					width: calc(100% - calc((186 / var(--sc)) * var(--fs)));
					overflow: hidden;
					height: 1px;
				}

				.top-line div,
				.bottom-line div {
					position: absolute;
					width: 100%;
					height: 100%;
					background: var(--main-color);
					opacity: 0.8;
					/*transform: translate3d(-101%, 0, 0);*/
					transition-property: transform, background;
					transition-duration: 1s;
					transform-origin: left;
					transition-timing-function: cubic-bezier(0.03, 0.15, 0.16, 0.99),
						cubic-bezier(0.215, 0.61, 0.355, 1);
				}

				.infinite-text-wrapper {
					overflow: hidden;
					padding: calc((10 / var(--sc)) * var(--fs)) 0;
				}

				.infinite-text-container {
					display: flex;
					align-items: center;
				}

				.infinite-text {
					animation-duration: 109.3s;
					flex-shrink: 0;
					animation-name: infiniteText;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					user-select: none;
				}

				@keyframes infiniteText {
					0% {
						transform: translate(0, 0);
					}

					100% {
						transform: translate(-100%, 0);
					}
				}

				.bottom-line {
					top: initial;
					position: absolute;
					bottom: 0;
					left: calc((93 / var(--sc)) * var(--fs));
					width: calc(100% - calc((186 / var(--sc)) * var(--fs)));
					overflow: hidden;
					height: 1px;
				}

				footer .container {
					position: relative;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					padding: calc((var(--ph) / var(--sc)) * var(--fs)) 3vw;
					font-size: calc((30 / var(--sc)) * var(--fs));
					text-transform: uppercase;
				}

				button {
					font-size: inherit;
				}

				.copyright {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					display: flex;
					justify-content: center;
					padding: calc((var(--ph) / var(--sc)) * var(--fs)) 3vw;
					pointer-events: none;
				}

				.madeBy {
					font-size: calc((18 / var(--sc)) * var(--fs));
					padding-top: calc((45 / var(--sc)) * var(--fs));
					width: 100%;
					display: flex;
					justify-content: center;
				}

				.fullYearAndMadeBy {
					display: none;
				}

				@media screen and (max-width: 768px) {
					main {
						--cs: 21.6;
						--dw: 455;
						--ps: 24;
						--ph: 20;
						--bi: 20;
						--vh: 6.78px;
						--fs: 21.6vw;
					}

					.section-1 h1 {
						min-height: initial;
						padding-top: calc((65 / var(--sc)) * var(--fs));
						padding-bottom: calc((46 / var(--sc)) * var(--fs));
						margin-left: calc((2.8 / var(--sc)) * var(--fs));
						font-size: calc((71 / var(--sc)) * var(--fs));
					}

					.letter-wrapper {
						margin-left: calc((-2.8 / var(--sc)) * var(--fs));
					}

					.section-2 {
						margin-bottom: calc((106 / var(--sc)) * var(--fs));
					}

					.section-2 .container {
						flex-direction: column;
						align-items: flex-end;
					}

					.information-wrapper {
						margin-top: 0;
						min-width: calc((298 / var(--sc)) * var(--fs));
						margin-bottom: calc((18 / var(--sc)) * var(--fs));
					}

					.information-container {
						flex-direction: row;
						flex-wrap: wrap;
						justify-content: space-between;
						font-size: calc((12 / var(--sc)) * var(--fs));
						line-height: 1.25;
					}

					.information {
						margin-bottom: calc((20 / var(--sc)) * var(--fs));
					}

					.profile-image-wrapper {
						width: calc((298 / var(--sc)) * var(--fs));
						height: calc((369 / var(--sc)) * var(--fs));
					}

					.section-3 .container {
						margin-bottom: calc((73 / var(--sc)) * var(--fs));
					}

					.description h2 {
						top: calc((4 / var(--sc)) * var(--fs));
						font-size: calc((8 / var(--sc)) * var(--fs));
					}

					.description p {
						line-height: 1.23;
						font-size: calc((18 / var(--sc)) * var(--fs));
					}

					.text-1 {
						margin-left: calc((108 / var(--sc)) * var(--fs));
					}

					.section-4 {
						margin-bottom: calc((43 / var(--sc)) * var(--fs));
					}

					.madeIn {
						margin-bottom: calc((10 / var(--sc)) * var(--fs));
						letter-spacing: calc((1.33 / var(--sc)) * var(--fs));
						font-size: calc((12 / var(--sc)) * var(--fs));
					}

					.bamako {
						line-height: 1.08;
						font-size: calc((62 / var(--sc)) * var(--fs));
					}

					.section-5 {
						margin-bottom: calc((39 / var(--sc)) * var(--fs));
					}

					.section-5 .container {
						padding: calc((10 / var(--sc)) * var(--fs)) 0;
						font-size: calc((18 / var(--sc)) * var(--fs));
					}

					.top-line,
					.bottom-line {
						left: calc((19 / var(--sc)) * var(--fs));
						width: calc(100% - calc((38 / var(--sc)) * var(--fs)));
					}

					footer .container {
						flex-direction: column;
						justify-content: flex-start;
						align-items: center;
						padding: calc((20 / var(--sc)) * var(--fs)) 3vw;
						font-size: calc((12 / var(--sc)) * var(--fs));
					}

					.copyright {
						position: initial;
						padding: calc((12 / var(--sc)) * var(--fs)) 0;
					}

					.madeBy {
						display: inline-flex;
						width: initial;
						padding-top: 0;
						font-size: calc((12 / var(--sc)) * var(--fs));
					}

					.toHide {
						display: none;
					}

					.toShow {
						display: block;
					}
				}

				@media screen and (max-width: 480px) {
					main {
						--cs: 10;
						--dw: 414;
						--fs: 10vw;
					}
				}
			`}</style>
		</>
	);
}
