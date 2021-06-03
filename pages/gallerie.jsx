import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const Gallery = dynamic(() => import("../components/GalleryPage"), {
	ssr: false,
});

export default function Gallerie() {
	return (
		<>
			<Layout />
			<Gallery />
		</>
	);
}
