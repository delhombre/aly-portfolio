import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import Layout from "../components/Layout";

const Section = ({ name, imageSrc, reference }) => {
	return (
		<>
			<section ref={reference}>
				<div className="container">
					<div className="title-container">
						<div className="title">
							<div className="stroked">
								<h1>Oeuvres récents</h1>
								<span>01</span>
							</div>
							<div className="filled">
								<h1>Oeuvres récents</h1>
								<span>01</span>
							</div>
						</div>
					</div>
					<div className="grid">
						<div className="main-image-container">
							<div className="main-image">
								<Image src={imageSrc} layout="fill" objectFit="contain" />
							</div>
						</div>
						<div className="second-image-container">
							<div className="second-image">
								<Image src={imageSrc} layout="fill" objectFit="contain" />
							</div>
						</div>
					</div>
					<div className="name">
						<h2>{name}</h2>
					</div>
				</div>
				<div className="fototala">fototala</div>
			</section>

			<style jsx>
				{`
					section {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100%;
						width: 100%;
					}

					.container {
						max-width: calc(100% - (var(--magnetic-margin) * 2));
						height: 80%;
						width: 100%;
						position: relative;
					}

					.title-container {
						font-family: "helvetica";
						font-size: 10vw;
						position: absolute;
						max-width: 100%;
						width: 100%;
						z-index: 2;
					}

					.title {
						position: relative;
					}

					h1,
					h2 {
						font-size: inherit;
						margin-block-start: 0px;
						margin-block-end: 0px;
						font-weight: normal;
					}

					.title span {
						display: block;
					}

					.stroked {
						/* color: black;
					-webkit-text-fill-color: white;
					-webkit-text-stroke-width: 2px;
					-webkit-text-stroke-color: black; */

						-webkit-text-fill-color: #ffffffd1;
						-webkit-text-stroke-width: 2px;
						-webkit-text-stroke-color: gray;
					}

					.filled {
						/* position: absolute;
					top: 7px;
					left: 5px; */

						position: absolute;
						top: 2%;
						left: 0.6%;
						color: rgb(0 0 0 / 46%);
						mix-blend-mode: difference;
					}

					.grid {
						display: grid;
						grid-template-columns: repeat(16, 1fr);
						width: 100%;
						height: 100%;
					}

					.main-image-container {
						grid-row-start: 1;
						grid-column-start: 3;
						grid-column-end: 12;
						position: relative;
					}

					.main-image {
						position: absolute;
						top: 50%;
						width: 100%;
						height: 80%;
						transform: translateY(-50%);
					}

					.second-image-container {
						grid-column-start: 13;
						grid-column-end: 17;
						position: relative;
					}

					.second-image {
						position: relative;
						height: 40%;
					}

					.name {
						font-family: "helvetica";
						font-size: calc(64 * var(--rfs));
						position: absolute;
						max-width: 100%;
						width: 100%;
						z-index: 2;
						bottom: 3.5rem;
						mix-blend-mode: difference;
						color: var(--second-color);
						font-weight: normal;
					}

					.fototala {
						position: absolute;
						bottom: var(--magnetic-margin);
						right: var(--magnetic-margin);
						font-size: 8vw;
						font-family: "helvetica";
						-webkit-text-fill-color: white;
						-webkit-text-stroke-width: 2px;
						-webkit-text-stroke-color: black;
						text-transform: uppercase;
					}

					@media screen and (max-width: 768px) {
						.stroked,
						.fototala {
							-webkit-text-stroke-width: 1px;
						}

						.filled {
							top: 4%;
						}

						.name {
							bottom: 25%;
						}
					}
				`}
			</style>
		</>
	);
};

export default function Home() {
	const sectionOne = useRef(null),
		sectionTwo = useRef(null),
		sectionThree = useRef(null);

	// gsap.registerPlugin(ScrollTrigger);

	// useEffect(() => {
	// 	const pages = [
	// 		sectionOne.current,
	// 		sectionTwo.current,
	// 		sectionThree.current,
	// 	];

	// 	console.log(ScrollTrigger.length);

	// function goToSection(i, pannel, anim) {
	// 	const tl = gsap.timeline();
	// 	if (tl.isActive()) return null;
	// 	tl.to(window, {
	// 		scrollTo: { y: pannel, autoKill: false },
	// 		duration: 0.7,
	// 		ease: "none",
	// 	});
	// 	if (anim) {
	// 		anim.restart();
	// 	}
	// }

	// pages.map((pannel, i) => {
	// 	ScrollTrigger.create({
	// 		trigger: pannel,
	// 		onEnter: () => goToSection(i, pannel),
	// 	});
	// 	ScrollTrigger.create({
	// 		trigger: pannel,
	// 		start: "bottom bottom",
	// 		onEnterBack: () => goToSection(i, pannel),
	// 	});
	// });
	// }, []);

	return (
		<>
			<Head>
				<title>Aly Traoré | Acceuil</title>
			</Head>
			<Layout />

			<main>
				<Section
					name="Prince Akachi"
					imageSrc="/images/1/lg.jpg"
					reference={sectionOne}
				/>
				<Section
					name="Prince Akachi"
					imageSrc="/images/2/lg.jpg"
					reference={sectionTwo}
				/>
				<Section
					name="Prince Akachi"
					imageSrc="/images/3/lg.jpg"
					reference={sectionThree}
				/>
			</main>

			<style jsx>{`
				main {
					height: 100%;
					width: 100%;
					overflow: hidden;
				}
			`}</style>
		</>
	);
}
