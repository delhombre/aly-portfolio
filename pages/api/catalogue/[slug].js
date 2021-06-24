import { catalog } from "../../../utils/catalogDatas";

export default function catalogHandler({ query: { slug } }, res) {
	const filtered = catalog.filter((c) => c.slug === slug);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res
			.status(404)
			.json({ message: `Le catalogue avec le titre "${slug}" n'existe pas.` });
	}
}
