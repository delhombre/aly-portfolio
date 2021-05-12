const Copyright = () => {
	return (
		<>
			<span>© {new Date().getFullYear()}</span>

			<style jsx>{`
				span {
					color: var(--main-color);
					text-transform: uppercase;
					font-size: clamp(18px, 4vw, 21.44px);
				}
			`}</style>
		</>
	);
};

export default Copyright;
