import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Layout from "./Layout";

const HomePage = () => {
	const mainRef = useRef(null);

	const urls = ["/images/1/lg.jpg", "/images/2/lg.jpg", "/images/3/lg.jpg"];

	useEffect(() => {
		const mainImages = document.querySelectorAll("#main-image");
		const secondImages = document.querySelectorAll("#second-image");
		const imageNumbers = document.querySelectorAll("#image-number");

		let index = 0,
			last = 0;
		const aminationDuration = 1000;

		mainRef.current.addEventListener("wheel", (e) => {
			const delta = e.wheelDelta;
			const now = new Date().getTime();

			if (now - last < aminationDuration) {
				e.preventDefault();
				return;
			}

			if (delta < 0) {
				if (index >= mainImages.length - 1) return;

				index++;

				mainImages.forEach((image, i) => {
					if (i === index) {
						gsap.to(imageNumbers[i - 1], { translateY: "-100%" });
						gsap.fromTo(
							imageNumbers[i],
							{ translateY: "100%" },
							{ translateY: 0 }
						);

						gsap.to(secondImages[i - 1], {
							translateX: "100%",
							duration: 1,
							delay: 0,
						});

						gsap.fromTo(
							secondImages[i],
							{
								translateX: "-100%",
							},
							{ translateX: 0, duration: 1, delay: 0, scale: 1 }
						);

						gsap.to(mainImages[i - 1], {
							scale: 0.9,
							duration: 1.5,
							opacity: 0,
							ease: "cubic-bezier(0.645,0.045,0.355,1)",
							delay: 0,
						});

						gsap.fromTo(
							image,
							{
								transform: "scale(0.9) rotate(-30deg)",
								transformOrigin: "350% 0",
							},
							{
								transform: "scale(1) rotate(0)",
								opacity: 1,
								duration: 1,
								ease: "cubic-bezier(0.645,0.045,0.355,1)",
								delay: 0,
							}
						);
					}
				});
			} else {
				if (index <= 0) return;

				index--;

				mainImages.forEach((image, i) => {
					if (i === index) {
						gsap.to(imageNumbers[i + 1], { translateY: "100%" });
						gsap.fromTo(
							imageNumbers[i],
							{ translateY: "-100%" },
							{ translateY: 0 }
						);

						gsap.to(secondImages[i + 1], {
							translateX: "-100%",
							duration: 1,
							delay: 0,
						});

						gsap.fromTo(
							secondImages[i],
							{
								translateX: "100%",
							},
							{ translateX: 0, duration: 1, delay: 0, scale: 1 }
						);

						gsap.to(mainImages[i + 1], {
							scale: 1.1,
							duration: 1.5,
							opacity: 0,
							ease: "cubic-bezier(0.645,0.045,0.355,1)",
							delay: 0,
						});

						gsap.fromTo(
							image,
							{
								transform: "scale(0.9) rotate(-30deg)",
								transformOrigin: "350% 0",
							},
							{
								transform: "scale(1) rotate(0)",
								opacity: 1,
								duration: 1,
								ease: "cubic-bezier(0.645,0.045,0.355,1)",
								delay: 0,
							}
						);
					}
				});
			}
			last = now;
		});

		let touch, startY, distY, startTime, elapsedTime;

		mainRef.current.addEventListener("touchstart", (e) => {
			touch = e.changedTouches[0];
			startY = touch.pageY;
			startTime = new Date().getTime(); // record time when finger first makes contact with surface
			e.preventDefault();
		});
		mainRef.current.addEventListener("touchmove", (e) => {
			e.preventDefault();
		});
		mainRef.current.addEventListener("touchend", (e) => {
			touch = e.changedTouches[0];
			distY = touch.pageY - startY; // get vertical dist traveled by finger while in contact with surface
			elapsedTime = new Date().getTime() - startTime;

			if (elapsedTime < aminationDuration) {
				e.preventDefault();
				return;
			}

			if (distY < 0) {
				if (index >= mainImages.length - 1) return;

				index++;

				mainImages.forEach((image, i) => {
					if (i === index) {
						gsap.to(imageNumbers[i - 1], { translateY: "-100%" });
						gsap.fromTo(
							imageNumbers[i],
							{ translateY: "100%" },
							{ translateY: 0 }
						);

						gsap.to(secondImages[i - 1], {
							translateX: "100%",
							duration: 1,
							delay: 0,
						});

						gsap.fromTo(
							secondImages[i],
							{
								translateX: "-100%",
							},
							{ translateX: 0, duration: 1, delay: 0, scale: 1 }
						);

						gsap.to(mainImages[i - 1], {
							scale: 0.9,
							duration: 1.5,
							opacity: 0,
							ease: "cubic-bezier(0.645,0.045,0.355,1)",
							delay: 0,
						});

						gsap.fromTo(
							image,
							{
								transform: "scale(0.9) rotate(-30deg)",
								transformOrigin: "350% 0",
							},
							{
								transform: "scale(1) rotate(0)",
								opacity: 1,
								duration: 1,
								ease: "cubic-bezier(0.645,0.045,0.355,1)",
								delay: 0,
							}
						);
					}
				});
			} else {
				if (index <= 0) return;

				index--;

				mainImages.forEach((image, i) => {
					if (i === index) {
						gsap.to(imageNumbers[i + 1], { translateY: "100%" });
						gsap.fromTo(
							imageNumbers[i],
							{ translateY: "-100%" },
							{ translateY: 0 }
						);

						gsap.to(secondImages[i + 1], {
							translateX: "-100%",
							duration: 1,
							delay: 0,
						});

						gsap.fromTo(
							secondImages[i],
							{
								translateX: "100%",
							},
							{ translateX: 0, duration: 1, delay: 0, scale: 1 }
						);

						gsap.to(mainImages[i + 1], {
							scale: 1.1,
							duration: 1.5,
							opacity: 0,
							ease: "cubic-bezier(0.645,0.045,0.355,1)",
							delay: 0,
						});

						gsap.fromTo(
							image,
							{
								transform: "scale(0.9) rotate(-30deg)",
								transformOrigin: "350% 0",
							},
							{
								transform: "scale(1) rotate(0)",
								opacity: 1,
								duration: 1,
								ease: "cubic-bezier(0.645,0.045,0.355,1)",
								delay: 0,
							}
						);
					}
				});
			}
		});
	}, []);

	return (
		<>
			<Head>
				<title>Aly Traoré | Acceuil</title>
			</Head>
			<Layout />

			<main ref={mainRef}>
				<section>
					<div className="container">
						<div className="title-container">
							<h1 className="title">Œuvres Récentes</h1>
							<div className="number-wrapper">
								{" 0"}
								<span className="indexes">
									<span>&nbsp;&nbsp;</span>
									{urls.map((url, index) => (
										<span
											className={`image-number ${index === 0 ? "active" : ""}`}
											key={`number-${index + 1}`}
											id="image-number"
										>
											{index + 1}
										</span>
									))}
								</span>
							</div>
						</div>
						<div className="grid">
							<div className="main-image-container">
								<div className="main-image">
									{urls.map((url, index) => (
										<Image
											key={index}
											src={url}
											layout="fill"
											objectFit="contain"
											className={`image ${index === 0 ? "active" : ""}`}
											id="main-image"
										/>
									))}
								</div>
							</div>
							<div className="second-image-container">
								<div className="second-image">
									{urls.map((url, index) => (
										<Image
											key={index}
											src={url}
											layout="fill"
											objectFit="contain"
											className={`image ${index === 0 ? "active" : ""}`}
											id="second-image"
										/>
									))}
								</div>
							</div>
						</div>
						<div className="name">
							<h2>Prince Akachi</h2>
						</div>
					</div>
					<div className="fototala">fototala</div>
				</section>
			</main>

			<style jsx global>{`
				main {
					height: 100%;
					width: 100%;
					overflow: hidden;
				}

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
					font-size: 11vw;
					position: absolute;
					max-width: 100%;
					width: 100%;
					z-index: 2;
				}

				.title {
					-webkit-text-fill-color: transparent;
					-webkit-text-stroke-width: 1px;
					-webkit-text-stroke-color: rgba(119, 136, 153, 1);
				}

				.indexes {
					display: inline-flex;
					flex-direction: column;
					position: relative;
					line-height: 1.05;
					overflow: hidden;
				}

				.image-number {
					position: absolute;
					transform: translateY(100%);
					transition: transform 1s ease;
					will-change: transform;
					backface-visibility: hidden;
				}

				.image-number.active {
					transform: translateY(0);
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

				.image {
					transform: scale(0);
					will-change: transform, opacity;
				}

				.image.active {
					transform: scale(1);
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
					-webkit-text-stroke-width: 1px;
					-webkit-text-stroke-color: black;
					text-transform: uppercase;
				}

				@media screen and (max-width: 768px) {
					.name {
						bottom: 25%;
					}
				}
			`}</style>
		</>
	);
};

export default HomePage;
