import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
	return (
		<>
			<Layout />

			<main>
				<section className="section">
					<div className="content">
						<div className="information">
							<div className="contact">
								<span>Contact:</span>
								<span>Bamako, ML</span>
								<span>+223 72.19.46.67</span>
								<span>ALYTRHT@GMAIL.COM</span>
							</div>
							<div className="contact">
								<span>Entreprise:</span>
								<span>gnagassadesign</span>
							</div>
						</div>
						<a
							href="mailto:alytrht@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							<span>Entrer</span>
							<br />
							<span className="tal">en</span>
							<br />
							<span>contact</span>
						</a>
						<p className="privateWork">
							<span>{"J'accepte"}</span>
							<span>les demandes privées</span>
							<span>pour la réalisation de vos projets.</span>
						</p>
					</div>
				</section>
			</main>

			<style jsx>{`
				main {
					background-color: var(--main-color);
					color: var(--second-color);
					font-size: calc((16 / var(--sc)) * var(--fs));
				}

				.section {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin: 0 var(--magnetic-margin);
					height: calc(var(--vh, 1vh) * 100);
					min-height: calc((900 / var(--sc)) * var(--fs));
				}

				.content {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					position: relative;
				}

				.information {
					display: flex;
					flex-direction: column;
					text-transform: uppercase;
					font-size: calc((18 / var(--sc)) * var(--fs));
					margin-top: calc((40 / var(--sc)) * var(--fs));
					line-height: 1.2;
				}

				.contact {
					margin-bottom: calc((45 / var(--sc)) * var(--fs));
					overflow: hidden;
					white-space: pre;
				}

				.contact span {
					display: block;
				}

				.link {
					font-family: "Sang Bleu", sans-serif;
					font-size: calc((230 / var(--sc)) * var(--fs));
					line-height: 0.975;
					letter-spacing: calc((-2 / var(--sc)) * var(--fs));
					white-space: normal;
					text-transform: uppercase;
					text-align: right;
					width: 70%;
					transition: opacity 0.5s;
				}

				.link:hover {
					opacity: 0.7;
				}

				.privateWork {
					font-size: calc((14 / var(--sc)) * var(--fs));
					line-height: 1.42;
					position: absolute;
					top: 100%;
					left: 0;
					text-transform: uppercase;
					user-select: none;
				}

				.privateWork span {
					display: block;
				}

				@media screen and (max-width: 768px) {
					.section {
						min-height: calc((600 / var(--sc)) * var(--fs));
						padding-top: calc((99 / var(--sc)) * var(--fs));
						padding-bottom: calc((87 / var(--sc)) * var(--fs));
					}

					.content {
						flex-direction: column;
						height: 100%;
					}

					.information {
						margin-top: 0;
						font-size: calc((12 / var(--sc)) * var(--fs));
						line-height: 1.25;
					}

					.contact {
						margin-bottom: calc((20 / var(--sc)) * var(--fs));
					}

					.link {
						width: initial;
						letter-spacing: calc((-1 / var(--sc)) * var(--fs));
						font-size: calc((70 / var(--sc)) * var(--fs));
					}

					.privateWork {
						position: static;
						top: initial;
						left: initial;
						max-width: calc((300 / var(--sc)) * var(--fs));
						line-height: 1.25;
						font-size: calc((12 / var(--sc)) * var(--fs));
					}
				}
			`}</style>
		</>
	);
};

export default Contact;
