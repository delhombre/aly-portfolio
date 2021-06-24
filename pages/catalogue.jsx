import { gsap } from "gsap";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

const Catalogue = ({ catalogs }) => {
	const router = useRouter();

	useEffect(() => {
		let xPos = 0;

		function drag(e) {
			if (e.touches) e.clientX = e.touches[0].clientX;

			gsap.to(".ring", {
				rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
				onUpdate: () => {
					gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
				},
			});

			xPos = Math.round(e.clientX);
		}

		function dragStart(e) {
			if (e.touches) e.clientX = e.touches[0].clientX;
			xPos = Math.round(e.clientX);
			gsap.set(".ring", { cursor: "grabbing" });
			document.addEventListener("mousemove", drag);
			document.addEventListener("touchmove", drag);
		}

		function dragEnd() {
			document.removeEventListener("mousemove", drag);
			document.removeEventListener("touchmove", drag);
			gsap.set(".ring", { cursor: "grab" });
		}

		function getBgPos(i) {
			return (
				100 -
				(gsap.utils.wrap(
					0,
					360,
					gsap.getProperty(".ring", "rotationY") - 180 - i * 36
				) /
					360) *
					500 +
				"px 0px"
			);
		}

		gsap
			.timeline()
			.set(".ring", { rotationY: 180, cursor: "grab" })
			.set(".img", {
				rotateY: (i) => i * -52,
				transformOrigin: "50% 50% 500px",
				z: -500,
				backgroundImage: (i) =>
					"url(https://picsum.photos/id/" + (i + 32) + "/600/400)",
				backgroundPosition: (i) => getBgPos(i),
				backfaceVisibility: "hidden",
			})
			.from(".img", {
				duration: 1.5,
				y: 200,
				opacity: 0,
				stagger: 0.1,
				ease: "expo",
			})
			.add(() => {
				document.querySelectorAll(".img").forEach((el) => {
					el.addEventListener("mouseenter", (e) => {
						let current = e.currentTarget;
						gsap.to(".img", {
							opacity: (i, t) => (t == current ? 1 : 0.5),
							ease: "power3",
						});
					});

					el.addEventListener("mouseleave", () => {
						gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
					});
				});
			}, "-=0.5");

		document.addEventListener("mousedown", dragStart);
		document.addEventListener("touchstart", dragStart);
		document.addEventListener("mouseup", dragEnd);
		document.addEventListener("touchend", dragEnd);
	}, []);

	return (
		<>
			<Layout />
			<div className="stage">
				<div className="container">
					<div className="ring">
						{catalogs.map((catalog, index) => (
							<div
								key={index}
								className="img"
								onClick={() =>
									router.push(`/catalogue/${encodeURIComponent(catalog.slug)}`)
								}
							>
								<p className="title">{catalog.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				html,
				body,
				.stage,
				.ring,
				.img {
					width: 100%;
					height: 100%;
					transform-style: preserve-3d;
					user-select: none;
				}
				html,
				body,
				.stage {
					overflow: hidden;
					background: #000;
					position: relative;
				}
				div,
				svg {
					position: absolute;
				}
				.container {
					perspective: 2000px;
					width: 350px;
					height: 500px;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}

				.img {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.title {
					color: var(--second-color);
					text-transform: uppercase;
					mix-blend-mode: difference;
					font-size: calc((55 / var(--sc)) * var(--fs));
					text-align: center;
				}

				@media screen and (max-width: 768px) {
					.container {
						perspective: 1000px;
					}

					.title {
						font-size: calc((30 / var(--sc)) * var(--fs));
					}
				}

				@media screen and (max-width: 480px) {
					.container {
						perspective: 500px;
					}
				}

				/* @media screen and (max-width: 375px) {
					.title {
						font-size: calc((30 / var(--sc)) * var(--fs));
					}
				} */
			`}</style>
		</>
	);
};

export default Catalogue;

export async function getStaticProps() {
	const res = await fetch(process.env.API_URL + "/catalogue");
	const catalogs = await res.json();

	return {
		props: {
			catalogs,
		}, // will be passed to the page component as props
	};
}
