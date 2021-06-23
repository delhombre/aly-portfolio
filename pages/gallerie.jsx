import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("../components/GalleryPage"), {
	ssr: false,
});

export default function Gallerie() {
	return (
		<>
			<Gallery />
		</>
	);
}
