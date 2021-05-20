import React, { useEffect, useRef } from "react";
import { imageData } from "../utils/datas";
import GalleryItem from "./GalleryItem";

const images = imageData.map((tupples, index) =>
	tupples.map((url, elementIndex) => (
		<GalleryItem
			key={url}
			src={url}
			index={elementIndex}
			columnOffset={index * 14}
		/>
	))
);

const HomeMain = () => {
	const ref = useRef(null);

	useEffect(() => {
		// if (ref) {
		// 	new LocomotiveScroll({
		// 		el: ref.current,
		// 		smooth: true,
		// 		direction: "horizontal",
		// 	});
		// }

		console.log("mounted");
	}, []);

	return (
		<>
			<main>
				<div className="scroll-container" ref={ref} data-scroll-container>
					<div className="content">
						<div className="gallery">
							{images}
							<div className="typography">
								Capturer la lumière de laplus belle des manières
							</div>
						</div>
					</div>
				</div>
			</main>

			<style>{`
      main{
        padding-right: 50rem;
      }

			.scroll-container{
				white-space: nowrap;
				display: inline-block;
			}

      .content{
        display: flex;
        height: 100vh;
        justify-content:center;
        align-items: center;
        position: relative;
      }

      .gallery{
        display: grid;
        grid-template-columns: repeat(50, 2%);
        grid-template-rows: repeat(50, 2%);
        width: 250vw;
        padding-left: 12vw;
        height: 100%;
        position: relative;
        align-items: center;
      }

      .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        font-size: clamp(90px, 6vw, 160px);
        color: #fff;
        mix-blend-mode: difference;
        z-index: 2;
				font-family: "Sang Bleu";
				letter-spacing: 2rem;
      }
      `}</style>
		</>
	);
};

export default HomeMain;
