import { catalogs } from "../../../utils/catalogDatas";

export default function handler(req, res) {
	res.status(200).json(catalogs);
}
