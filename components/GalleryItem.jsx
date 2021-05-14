import React from "react";
import { points } from "../utils/datas";

const GalleryItem = ({ src, index, columnOffset }) => {
	const values = points[index];

	if (!values) return null;

	const [row, column, spanRow, spanColumn] = values;

	return (
		<>
			<div
				className="gallery-item"
				style={{
					gridArea: `${row} / ${
						column + columnOffset
					} / span ${spanRow} / span ${spanColumn}`,
				}}
			>
				<div className="gallery-item-image">
					<div
						className="gallery-item-imginner"
						style={{ backgroundImage: `url(${src})` }}
					></div>
				</div>
			</div>

			<style jsx>{`
				.gallery-item {
					z-index: 1;
					height: 100%;
				}

				.gallery-item-image {
					width: 100%;
					height: 100%;
					overflow: hidden;
					position: relative;
				}

				.gallery-item-imginner {
					background-size: cover;
					background-position: center;
					transform-origin: center left;
					width: 100%;
					height: 100%;
					will-change: transform;
					transform: scale(1.1);
					transition: transform 2s cubic-bezier(0.77, 0, 0.175, 1);
				}
			`}</style>
		</>
	);
};

export default GalleryItem;
