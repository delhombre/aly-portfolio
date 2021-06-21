import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
	return (
		<>
			<Layout />

			<main>
				<div className="section">
					<div className="content">
						<div className="information">
							<div className="contact"></div>
							<div className="contact"></div>
						</div>
						<a href="mailto:alytrht@gmail.com" className="link">
							Entrer en contact
						</a>
					</div>
				</div>
			</main>

			<style jsx>{`
				main {
					background-color: var(--main-color);
					font-size: calc((16 / var(--sc)) * var(--fs));
				}

				.section {
				}
			`}</style>
		</>
	);
};

export default Contact;
