import React from "react";

const Menu = ({ isActive }) => {
	return (
		<>
			<div className={`menu-wrapper ${isActive ? "active" : ""}`}>
				<div className="menu-header">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<nav className="menu">
					<ul>
						<li>Accueil</li>
						<li>A propos de moi</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
			<style>{`
			.menu-wrapper{
          height: 0;
          width: 100vw;
          overflow: hidden;
          background-color: var(--main-color);
          color: #fff;
					transition: height 0.36s cubic-bezier(0.32, 0.08, 0.24, 1);
					position: absolute;
					z-index:20;
        }

				.menu-wrapper.active{
					height:100vh;
				}

        .menu{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
		</>
	);
};

export default Menu;
