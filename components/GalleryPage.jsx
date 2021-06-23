import { useEffect } from "react";
import gallery3d from "../utils/3dgallery";
import Layout from "./Layout";

const GalleryPage = () => {
	useEffect(() => {
		gallery3d();
	}, []);

	return (
		<>
			<Layout />
			<main>
				<canvas id="view"></canvas>
			</main>

			<style jsx>{`
				main {
					width: 100%;
					height: 100%;
					overflow: hidden;
				}
			`}</style>
		</>
	);
};

export default GalleryPage;
