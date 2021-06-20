import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Layout = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<AnimatePresence>{isActive && <Menu />}</AnimatePresence>
			<header>
				<div className="menu">
					<button onClick={() => setIsActive((a) => !a)}>
						{!isActive ? (
							<>
								{[..."Menu"].map((letter, index) => (
									<span key={index} className="single">
										{letter}
									</span>
								))}
							</>
						) : (
							<>
								{[..."Fermer"].map((letter, index) => (
									<span key={index} className="single">
										{letter}
									</span>
								))}
							</>
						)}
					</button>
				</div>
				<div className="catalog">
					<Link href="/catalogue">
						<a>Catalogue</a>
					</Link>
				</div>
			</header>
			<div className="gallery">
				<Link href="/gallerie">
					<a className="icon">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</a>
				</Link>
			</div>

			<style jsx>{`
				header {
					position: fixed;
					top: var(--magnetic-margin);
					right: 0;
					left: 0;
					margin: 0 var(--magnetic-margin);
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-transform: uppercase;
					mix-blend-mode: difference;
					color: var(--second-color);
					user-select: none;
					pointer-events: none;
					z-index: 9999;
					font-size: clamp(1.5rem, 4vw, 2.2rem);
				}

				.menu,
				.catalog {
					pointer-events: all;
				}

				.menu button {
					font-size: clamp(1.5rem, 4vw, 2.2rem);
					color: var(--second-color);
				}

				.gallery {
					position: fixed;
					left: var(--magnetic-margin);
					bottom: var(--magnetic-margin);
					z-index: 9999;
					mix-blend-mode: difference;
					user-select: none;
				}

				.gallery .icon {
					width: 24px;
					height: 24px;
					position: relative;
					display: block;
					transform: rotate(90deg);
				}

				.dot {
					--hover-t: 4px;
					--scaleX: 2;
					--scaleY: 2;
					position: absolute;
					width: 3px;
					height: 3px;
					border-radius: 50%;
					top: 50%;
					left: 50%;
					transition: transform 0.5s;
					background-color: var(--second-color);
				}

				.dot:nth-child(1) {
					transform-origin: top center;
					transform: translate3d(calc(-50% + var(--hover-t)), var(--hover-t), 0)
						rotate(-45deg) scale(var(--scaleX), var(--scaleY));
				}

				.dot:nth-child(2) {
					transform-origin: top center;
					transform: translate3d(calc(-50% - var(--hover-t)), var(--hover-t), 0)
						rotate(45deg) scale(var(--scaleX), var(--scaleY));
				}

				.dot:nth-child(3) {
					transform-origin: bottom center;
					transform: translate3d(
							calc(-50% - var(--hover-t)),
							calc(-100% - var(--hover-t)),
							0
						)
						rotate(-45deg) scale(var(--scaleX), var(--scaleY));
				}

				.dot:nth-child(4) {
					transform-origin: bottom center;
					transform: translate3d(
							calc(-50% + var(--hover-t)),
							calc(-100% - var(--hover-t)),
							0
						)
						rotate(45deg) scale(var(--scaleX), var(--scaleY));
				}

				.gallery:hover .dot {
					--hover-t: 2px;
				}
			`}</style>
		</>
	);
};

export default Layout;
