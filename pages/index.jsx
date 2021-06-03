import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Aly Traoré | Acceuil</title>
			</Head>
			<Layout />

			<main>
				<section className="section">
					<div className="container-section">
						<div className="fototala">
							<h1>Fototala</h1>
						</div>
						<div className="top-image">
							<Image
								src="/images/2/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="main-image">
							<Image
								src="/images/1/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="bottom-image">
							<Image
								src="/images/3/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</section>
			</main>

			<style jsx>{`
				main {
					height: 100%;
					width: 100%;
					overflow: hidden;
				}

				.section {
					height: 100%;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					--cof-size: 10.7;
					--desktop-width: 1920;
					--rem: 13.7vw;
				}

				.container-section {
					width: calc(
						(1000 / ((var(--desktop-width) / 100) * var(--cof-size))) *
							var(--rem)
					);
					height: calc(
						(880 / ((var(--desktop-width) / 100) * var(--cof-size))) *
							var(--rem)
					);
					position: relative;
					display: flex;
					justify-content: center;
				}

				@media screen and (max-width: 768px) {
					.section {
						--cof-size: 21.6;
						--desktop-width: 768;
						--rem: 21.6vw;
					}
				}

				.fototala {
					font-size: 7vmax;
					font-family: "Sang Bleu";
					text-transform: uppercase;
					mix-blend-mode: difference;
					color: white;
					z-index: 3;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
				}

				.top-image,
				.bottom-image {
					position: relative;
					z-index: 1;
				}

				.top-image {
					transform: translateX(80%) rotate(-25deg);
					transform-origin: bottom;
					top: 40%;
					height: 45%;
					width: 27.5%;
				}

				.main-image {
					width: 55%;
					height: 90%;
					position: relative;
					align-self: center;
					z-index: 2;
				}

				.bottom-image {
					transform: translateX(-80%) rotate(25deg);
					transform-origin: bottom;
					top: 15%;
					height: 50%;
					width: 35%;
				}
			`}</style>
		</>
	);
}
