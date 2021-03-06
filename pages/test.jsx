import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import image1 from "../public/images/home/1.jpg";
import image2 from "../public/images/home/2.jpg";
import image3 from "../public/images/home/3.jpg";
import image4 from "../public/images/home/4.jpg";
import image5 from "../public/images/home/5.jpg";
import image6 from "../public/images/home/6.jpg";
import { Showcase } from "../utils/Showcase";
import { Slides } from "../utils/Slides";

const slidesData = [
	{
		image: image1,
		title: "Segovia",
		meta: "Spain / Castile and León",
	},
	{
		image: image2,
		title: "Barcelona",
		meta: "Spain / Catalonia",
	},
	{
		image: image3,
		title: "Málaga",
		meta: "Spain / Andalusia",
	},
	{
		image: image4,
		title: "Pamplona",
		meta: "Spain / Navarre",
	},
	{
		image: image5,
		title: "Bilbao",
		meta: "Spain / Biscay",
	},
	{
		image: image6,
		title: "Madrid",
		meta: "Spain / Madrid",
	},
];

const Test = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const slides = new Slides(slidesData);
		const showcase = new Showcase(slidesData, {
			onActiveIndexChange: (activeIndex) => {
				slides.onActiveIndexChange(activeIndex);
			},
			onIndexChange: (index) => {
				slides.onMove(index);
			},
			onZoomOutStart: () => {
				// cursor.enter();
				slides.appear();
			},
			onZoomOutFinish: () => {},
			onFullscreenStart: ({ activeIndex }) => {
				// cursor.leave();
				slides.disperse(activeIndex);
			},
			onFullscreenFinish: () => {},
		});

		showcase.mount(container);
		slides.mount(container);

		showcase.render();

		window.addEventListener("resize", function () {
			showcase.onResize();
		});

		window.addEventListener("mousemove", function (ev) {
			showcase.onMouseMove(ev);
		});
	}, []);

	return (
		<>
			<Layout />

			<main ref={containerRef}></main>

			<style jsx global>{`
				main {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					overflow: hidden;
					background-color: var(--main-color);
					display: flex;
					flex-direction: column;
					position: relative;
					justify-content: flex-start;
					align-items: center;
				}

				.clickAndDrag{
					position: absolute;
					bottom: var(--magnetic-margin);
					left:50%;
					transform: translateX(-50%);
					font-family: "aly"
					text-transform: uppercase;
					text-decoration: underline;
					font-size: calc((18 / var(--sc)) * var(--fs));
				}

				canvas {
					user-select: none;
				}

				.slides {
					position: absolute;
					top: 50%;
					padding: 0 10vw;
					width: 100%;
					max-width: 100%;
					user-select: none;
				}

				.slide {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 100%;
					max-width: 1200px;
					margin: 0 auto;
					height: 33vh;
					color: var(--second-color);
					transform: translateY(-50%);
					transition: transform 1300ms cubic-bezier(0.2, 1, 0.3, 1),
						opacity 500ms cubic-bezier(0.2, 1, 0.3, 1);
				}

				.slide-meta {
					margin: 0;
					font-size: 1.35rem;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}

				.slide-meta,
				.slide-more {
					opacity: 0;
					transition: opacity 900ms cubic-bezier(0.2, 1, 0.3, 1);
				}

				.show-meta .slide-meta,
				.show-meta .slide-more {
					opacity: 1;
					transition: opacity 1500ms 300ms cubic-bezier(0.2, 1, 0.3, 1);
				}

				.slide-more {
					border-bottom: 1px solid;
				}

				.slide-more:hover {
					border-bottom: 1px solid transparent;
				}

				.slide-title {
					font-size: 10vw;
					margin: 0;
					color: #fafafa;
					text-indent: -0.5vw;
					font-family: gibbs, sans-serif;
					font-weight: 900;
					transition: color 500ms cubic-bezier(0.2, 1, 0.3, 1);
				}

				.prev,
				.next {
					opacity: 0;
				}

				.prev {
					transform: translateY(-85%);
				}

				.next {
					transform: translateY(-15%);
				}

				.prev .slide-title,
				.next .slide-title {
					-webkit-text-stroke: 1.5px #fafafa;
					text-stroke: 1.5px #fafafa;
					-webkit-text-fill-color: transparent;
					text-fill-color: transparent;
					color: transparent;
				}

				.scrolling > .slide {
					transform: translateY(-50%);
					opacity: 1;
				}
			`}</style>
		</>
	);
};

export default dynamic(() => Promise.resolve(Test), {
	ssr: false,
});
