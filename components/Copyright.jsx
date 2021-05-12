const Copyright = () => {
	return (
		<>
			<span>© {new Date().getFullYear()}</span>

			<style jsx>{`
				span {
					color: var(--main-color);
					text-transform: uppercase;
					font-size: calc(16 * var(--rfs));
				}
			`}</style>
		</>
	);
};

export default Copyright;
