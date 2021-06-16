import Image from "next/image";
import Layout from "../../components/Layout";

export default function CatalogShow() {
	return (
		<>
			<Layout />
			<main>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/1/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/2/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/3/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/1/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/2/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/3/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/1/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/2/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/3/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="image-wrapper">
					<div className="image">
						<Image src="/images/2/lg.jpg" layout="fill" objectFit="cover" />
					</div>
				</div>
			</main>

			<style jsx>{`
				main {
					perspective: 500px;
					overflow-x: hidden;
					height: 100%;
					width: 100%;
				}

				.image-wrapper {
					position: sticky;
					top: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100vw;
					height: 100vh;
				}

				.image {
					position: relative;
					width: 100vmin;
					height: 100vmin;
					border-radius: 5px;
				}

				.image-wrapper:nth-child(1) .image {
					transform: scale(0.6) rotate(-12.5deg);
				}
				.image-wrapper:nth-child(2) .image {
					transform: scale(0.6) rotate(-9.72222deg);
				}
				.image-wrapper:nth-child(3) .image {
					transform: scale(0.6) rotate(-6.94deg);
				}
				.image-wrapper:nth-child(4) .image {
					transform: scale(0.6) rotate(-4.16deg);
				}
				.image-wrapper:nth-child(5) .image {
					transform: scale(0.6) rotate(-1.38deg);
				}
				.image-wrapper:nth-child(6) .image {
					transform: scale(0.6) rotate(1.38deg);
				}
				.image-wrapper:nth-child(7) .image {
					transform: scale(0.6) rotate(4.16deg);
				}
				.image-wrapper:nth-child(8) .image {
					transform: scale(0.6) rotate(6.94deg);
				}
				.image-wrapper:nth-child(9) .image {
					transform: scale(0.6) rotate(9.72deg);
				}
				.image-wrapper:nth-child(10) .image {
					transform: scale(0.6) rotate(12.5deg);
				}
			`}</style>
		</>
	);
}
