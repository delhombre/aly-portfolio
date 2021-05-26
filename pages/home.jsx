import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const home = () => {
	return (
		<>
			<Head>
				<title>Aly Traoré | Acceuil</title>
				<meta name="description" content="Aly Traoré photographe fototala" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout></Layout>
			<style jsx>{``}</style>
		</>
	);
};

export default home;
