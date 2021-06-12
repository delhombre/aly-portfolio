import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
	return (
		<>
			<Layout />

			<main>
				<section className="section-1">
					<h1>
						{["M", "o", "n"].map((l, index) => (
							<span key={index} className="letter-wrapper">
								<span className="letter">{l}</span>
							</span>
						))}{" "}
						<br />
						{["p", "r", "o", "f", "i", "l"].map((l, index) => (
							<span key={index} className="letter-wrapper">
								<span className="letter">{l}</span>
							</span>
						))}
					</h1>
				</section>
				<section className="section-2">
					<div className="container">
						<div className="information-wrapper">
							<div className="information-container">
								<div className="information-1">
									<span className="contact">
										<div>contact:</div>
									</span>
									<span className="contact">
										<div>Bamako, ML</div>
									</span>
									<span className="contact">
										<div>+223 72.19.46.67</div>
									</span>
									<span className="contact">
										<div>alyrht@gmail.com</div>
									</span>
								</div>
							</div>
						</div>
						<div className="profile-image-wrapper">
							<div className="profile-image">
								<Image src="/images/1/lg.jpg" layout="fill" objectFit="cover" />
							</div>
						</div>
					</div>
				</section>
				<section className="section-3">
					<div className="container">
						<div className="description">
							<h2>
								<span>Profil</span>
							</h2>
							<p>
								<span className="text-content">
									<span className="text text-1">Lorem, ipsum dolor.</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet, consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</span>
								</span>
								<span className="text-content">
									<span className="text">Lorem ipsum dolor sit amet.</span>
								</span>
								<span className="text-content">
									<span className="text">Lorem, ipsum dolor.</span>
								</span>
							</p>
						</div>
					</div>
				</section>
				<section className="section-4">
					<div className="container">
						<span className="madeIn">Réalisé à</span>
						<div className="bamako">
							{["B", "a", "m", "a", "k", "o"].map((l, index) => (
								<span key={index} className="letter-wrapper">
									<span className="letter">{l}</span>
								</span>
							))}{" "}
							<br />
							{["m", "a", "l", "i"].map((l, index) => (
								<span key={index} className="letter-wrapper">
									<span className="letter">{l}</span>
								</span>
							))}
						</div>
					</div>
				</section>

				<section className="section-5">
					<div className="container">
						<div className="top-line">
							<div></div>
						</div>
						<div className="infinite-text-wrapper">
							<div className="infinite-text-container">
								<div className="infinite-text">
									Capturer la lumière de la plus belle des manières.
								</div>
								<div className="infinite-text">
									Capturer la lumière de la plus belle des manières.
								</div>
							</div>
						</div>
						<div className="bottom-line">
							<div></div>
						</div>
					</div>
				</section>
				<p>under building...</p>
			</main>

			<style>{`
      main{
        width:100%;
        height:100%;
        --cs: 13.7;
        --dw: 1920;
        --ps: 55;
        --ph: 55;
        --bi: 70;
        --sc: calc((var(--dw) / 100) * var(--cs));
        font-size: calc((16/var(--sc)) * 13.7vw);
      }

      .section-1{
        width:100%;
      }

      .section-1 h1{
        font-size: calc((343/var(--sc)) * 13.7vw);
        line-height: .9;
        padding-top: calc((217/var(--sc)) * 13.7vw);
        padding-bottom: calc((180/var(--sc)) * 13.7vw);
        text-transform: uppercase;
        text-align: center;
        max-height: calc(var(--vh,1vh) * 93);
        margin-left: calc((13.96/var(--sc)) * 13.7vw);
        min-height: calc((950/var(--sc)) * 13.7vw);
      }

      .letter-wrapper{
        display:inline-flex;
        margin-left: calc((-13.96/var(--sc)) * 13.7vw);
        position: relative;
        overflow: hidden;
      }

      .letter{
        display:inline-block;
      }

      .section-2{
        margin-bottom: calc((248/var(--sc)) * 13.7vw);
      }

      .section-2 .container{
        display:flex;
        justify-content:space-between;
        padding:0 3vw;
      }

      .information-wrapper{
        margin-top: calc((205/var(--sc)) * 13.7vw);
      }

      .information-container{
        font-size: calc((30/var(--sc)) * 13.7vw);
        font-family: knockout,Arial,Helvetica,sans-serif;
        line-height: 1.2;
        display: flex;
        flex-direction: column;
        text-transform: uppercase
      }

      .information-1{
        margin-bottom: calc((45/var(--sc)) * 13.7vw);
        overflow: hidden;
        white-space: pre;
      }

      .contact{
        display:block;
        position: relative;
        overflow: hidden;
      }

      .profile-image-wrapper{
        width: calc((1180/var(--sc)) * 13.7vw);
        height: calc((1470/var(--sc)) * 13.7vw);
        overflow: hidden;
      }

      .profile-image{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position:relative;
      }

      .section-3 .container{
        margin-bottom: calc((250/var(--sc)) * 13.7vw);
        padding: 0 3vw;
      }

      .description{
        position:relative;
      }

      .description h2{
        font-family: knockout,Arial,Helvetica,sans-serif;
        font-size: calc((18/var(--sc)) * 13.7vw);
        position: absolute;
        top: calc((14/var(--sc)) * 13.7vw);
        left: 0;
        text-transform: uppercase;
      }

      .description h2 span{
        opacity:0.5;
      }

      .description p{
        font-family: SF Pro Display, 'helvetica',sans-serif;
        font-size: calc((80/var(--sc)) * 13.7vw);
        line-height: 1.12;
        overflow: hidden;
        white-space: pre;
      }

      .text-content{
        display:block;
        overflow:hidden;
        position:relative;
      }

      .text{
        display: block;
      }

      .text-1{
        margin-left: calc((475/var(--sc)) * 13.7vw);
      }

      .section-4{
        margin-bottom: calc((195/var(--sc)) * 13.7vw);
      }

      .section-4 .container{
        text-align: center;
        text-transform: uppercase;
      }

      .madeIn{
        display: block;
        margin-bottom: calc((50/var(--sc)) * 13.7vw);
        font-family: knockout,Arial,Helvetica,sans-serif;
        font-size: calc((18/var(--sc)) * 13.7vw);
        letter-spacing: calc((2/var(--sc)) * 13.7vw);
      }

      .bamako{
        font-family: 'Sang Bleu';
        font-size: calc((300/var(--sc)) * 13.7vw);
        overflow: hidden;
        white-space: pre;
      }

      .section-5{
        margin-bottom: calc((220/var(--sc)) * 13.7vw);
      }

      .section-5 .container{
        font-family: 'helvetica',sans-serif;
        font-size: calc((80/var(--sc)) * 13.7vw);
        position: relative;
        overflow: hidden;
        padding: calc((28/var(--sc)) * 13.7vw) 0;
      }

      .top-line{
        position: absolute;
        top: 0;
        left: calc((93/var(--sc)) * 13.7vw);
        width: calc(100% - calc((186/var(--sc)) * 13.7vw));
        overflow: hidden;
        height: 1px;
        background: var(--main-color);
      }

      .top-line div, .bottom-line div{
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--main-color);
        opacity: .8;
        transform: translate3d(-101%,0,0);
        transition-property: transform,background;
        transition-duration: 1s;
        transform-origin: left;
        transition-timing-function: cubic-bezier(.03,.15,.16,.99),cubic-bezier(.215,.61,.355,1);
      }

      .infinite-text-wrapper{
        overflow: hidden;
        padding: calc((10/var(--sc)) * 13.7vw) 0;
      }

      .infinite-text-container{
        display: flex;
        align-items: center;
      }

      .infinite-text{
        animation-duration: 109.3s;
        flex-shrink: 0;
        animation-name: infiniteText;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        user-select: none;
      }

      @keyframes infiniteText{
        0% {
          transform: translate(0,0);
        }

        100% {
        transform: translate(-100%,0);
        }
      }

      .bottom-line{
        top: initial;
        position: absolute;
        bottom: 0;
        left: calc((93/var(--sc)) * 13.7vw);
        width: calc(100% - calc((186/var(--sc)) * 13.7vw));
        overflow: hidden;
        height: 1px;
        background: var(--main-color);
      }

      @media screen and (max-width: 768px){
        main{
          --cs: 21.6;
          --dw: 455;
          --ps: 24;
          --ph: 20;
          --bi: 20
        }

        .section-1 h1 {
          min-height: initial;
          padding-top: calc((65/var(--sc)) * 13.7vw);
          padding-bottom: calc((46/var(--sc)) * 13.7vw);
          margin-left: calc((2.8/var(--sc)) * 13.7vw);
          font-size: calc((71/var(--sc)) * 13.7vw);
        }

        .letter-wrapper{
          margin-left: calc((-2.8/var(--sc)) * 13.7vw);
        }
      }

      @media screen and (max-width: 480px){
        main {
          --cs: 10;
          --dw: 414;
        }
      }
      `}</style>
		</>
	);
}
