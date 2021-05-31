import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Aly Traoré | Acceuil</title>
			</Head>
			<Layout />

			<main>
				<section className="section">
					<div className="container-section">
						<div className="top-image">
							<Image
								src="/images/2/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="main-image">
							<Image
								src="/images/1/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="bottom-image">
							<Image
								src="/images/3/original.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</section>
			</main>

			<style jsx>{`
				main {
					height: 100%;
					width: 100%;
				}

				.section {
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.container-section {
					display: grid;
					height: clamp(50vw, 100vmin, 512px);
					width: clamp(50vw, 100vmin, 512px);
				}

				.top-image,
				.main-image,
				.bottom-image {
					position: relative;
				}
			`}</style>
		</>
	);
}
