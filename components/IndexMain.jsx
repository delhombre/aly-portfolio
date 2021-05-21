import React, { Fragment, useEffect, useState } from "react";
import { images } from "../utils/datas";

const IndexMain = () => {
	const [current, setCurrent] = useState(0);
	const length = images.length;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(current === length - 1 ? 0 : current + 1);
			// console.log(current);
		}, 5000);

		return () => clearInterval(interval);
	}, [current, length]);

	return (
		<>
			<main>
				<div className="content">
					<div className="typography-wrapper">
						<div className="typography">
							<span className="txt bottom-to-top">
								Capturer la lumière de la plus belle des manières.&nbsp;
							</span>
							<span className="txt bottom-to-top">
								Capturer la lumière de la plus belle des manières.&nbsp;
							</span>
						</div>
						<div className="typography">
							<span className="txt top-to-bottom">
								Capturer la lumière de la plus belle des manières.&nbsp;
							</span>
							<span className="txt top-to-bottom">
								Capturer la lumière de la plus belle des manières.&nbsp;
							</span>
						</div>
					</div>
					{images.map((item, index) => (
						<Fragment key={index}>
							<div
								className={index === current ? "gallery active" : "gallery out"}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							></div>
							<div className="meta">
								<div className="label">{current === index && item.label}</div>
							</div>
						</Fragment>
					))}
					<div className="black-board"></div>
					<div className="white-board"></div>
					{/* <div className="meta">
						<div className="title">toto</div>
						<div className="button">tata</div>
					</div> */}
				</div>
			</main>

			<style jsx>
				{`
					main {
						height: 100vh;
						background: #fff;
						overflow: hidden;
					}

					.content {
						height: 100%;
						display: grid;
						grid-template-columns: repeat(10, 1fr);
						grid-template-rows: repeat(10, 1fr);
						position: relative;
					}

					.gallery {
						grid-area: 4/ 7 / span 5 / span 3;
						background-position: center;
						background-size: cover;
						z-index: 2;
						border: 5px solid rgba(255, 255, 255, 0.5);
						transform: scale(1) rotate(-30deg);
						transform-origin: 350% 0;
					}

					.gallery.active {
						-webkit-transform: scale(1.1) translateX(30%) rotate(0);
						transform: scale(1.1) translateX(30%) rotate(0);
						z-index: 10;
					}

					.gallery.out {
						transform: scale(1) rotate(0);
						visibility: hidden;
					}

					.gallery.active,
					.gallery.out {
						transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
					}

					.typography-wrapper {
						width: 100%;
						position: absolute;
						left: -13%;
						transform: rotate(-45deg);
						z-index: 4;
						color: var(--second-color);
						mix-blend-mode: difference;
					}

					.typography {
						display: flex;
						font-family: "Sang Bleu";
						text-transform: uppercase;
					}

					.txt {
						white-space: nowrap;
						font-size: clamp(2rem, 5vw, 6rem);
						font-size: 7rem;
					}

					.bottom-to-top {
						animation: bottomToTop 30s linear infinite;
					}

					.top-to-bottom {
						animation: topToBottom 30s linear infinite;
					}

					@keyframes bottomToTop {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(-100%, 0);
						}
					}

					@keyframes topToBottom {
						from {
							transform: translate(-100%, 0);
						}
						to {
							transform: translate(0, 0);
						}
					}

					.black-board {
						grid-area: 3/ 4 / span 4 / span 4;
						background-color: var(--main-color);
						z-index: 1;
						position: relative;
					}

					.white-board {
						grid-area: 4/5 / span 2 / span 2;
						background-color: var(--second-color);
						z-index: 2;
					}

					.meta {
						grid-area: 7/4 / span 1 / span 3;
						display: flex;
						align-items: center;
						justify-content: space-between;
					}

					.label {
						font-size: 2rem;
						font-family: "SF Pro Text", sans-serif;
						font-weight: 100;
					}
				`}
			</style>
		</>
	);
};

export default IndexMain;
