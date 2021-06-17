import React from "react";

const Loader = () => {
	return (
		<>
			<div className="loader-wrapper">
				<div className="header">
					<h1 className="aly">Aly Traoré</h1>
					<h2 className="fototala">fototala</h2>
				</div>
				<div className="count">
					<span>{"ʻ"}</span>&nbsp;
					<span className="counter"></span>
				</div>
				<div className="footer">
					<div className="photograph">Photographe</div>
					<div className="bamako">Bamako, ML</div>
				</div>
			</div>

			<style jsx>
				{`
					.loader-wrapper {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						background-color: var(--main-color);
						color: var(--second-color);
						overflow: hidden;
						user-select: none;
						z-index: 1000;
						animation: loader cubic-bezier(0.45, 0, 0.55, 1) both;
					}

					@keyframes loader {
						0% {
							opacity: 0;
							visibility: hidden;
						}

						100% {
							opacity: 1;
							visibility: visible;
						}
					}

					.header {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: var(--magnetic-margin) 0;
					}

					.aly {
						font-family: "Khatija Calligraphy";
						font-size: calc((90 / var(--sc)) * var(--fs));
						white-space: pre;
						line-height: 2.5;
					}

					.fototala {
						font-family: "aly";
						text-transform: uppercase;
						letter-spacing: 1px;
						font-size: calc((30 / var(--sc)) * var(--fs));
					}

					.count {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						font-family: "Sang Bleu";
						font-size: calc((300 / var(--sc)) * var(--fs));
					}

					.footer {
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						padding: var(--magnetic-margin);
						display: flex;
						justify-content: space-between;
						font-size: calc((30 / var(--sc)) * var(--fs));
						text-transform: uppercase;
					}

					@media screen and (max-width: 768px) {
						.aly {
							font-size: calc((25 / var(--sc)) * var(--fs));
							line-height: normal;
						}

						.fototala {
							font-size: calc((15 / var(--sc)) * var(--fs));
						}

						.count {
							font-size: calc((95 / var(--sc)) * var(--fs));
						}

						.footer {
							font-size: calc((15 / var(--sc)) * var(--fs));
						}
					}

					@property --num {
						syntax: "<integer>";
						initial-value: 0;
						inherits: false;
					}

					.counter {
						transition: --num 2s;
						/*animation: counter 2s forwards ease-in-out;*/
						counter-reset: num var(--num);
					}

					.counter::after {
						content: counter(num);
					}

					@keyframes counter {
						from {
							--num: 0;
						}
						to {
							--num: 100;
						}
					}
				`}
			</style>
		</>
	);
};

export default Loader;
