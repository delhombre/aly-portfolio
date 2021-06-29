import { images } from "../../../utils/galleryDatas";

let totalWidth = 0,
	totalHeight = 0;

images.forEach((image) => {
	totalWidth += image.width;
	totalHeight += image.height;
});

export default function handler(req, res) {
	res.status(200).json({
		totalWidth,
		totalHeight,
		datas: images,
	});
}
