import React from "react";

const Menu = () => {
	return (
		<>
			<div className="menu-wrapper">
				<div className="menu-container">
					<nav className="menu">
						<ul>
							<li>Accueil</li>
							<li>A propos de moi</li>
							<li>Contact</li>
						</ul>
					</nav>
					<div className="menu-image">
						<div className="template"></div>
					</div>
				</div>
			</div>
			<style>{`
      .template{
        height: 200px;
        width: 150px;
        background-color: #fff;
      }
        .menu-wrapper{
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: var(--main-color);
          color: #fff;
        }

        .menu-container{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
		</>
	);
};

export default Menu;
