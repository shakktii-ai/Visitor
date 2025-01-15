
const Footer = () => { 
    return ( 
      <>
        <style jsx>
          {`
            .background {
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
  
            ul {
              display: flex;
              list-style: none;
              padding: 0;
              margin: 0;
            }
  
            .socials {
              gap: 20px;
            }
  
            .socials a {
              font-size: 24px;
            }
  
            .links {
              gap: 10px;
              flex-direction: column;
            }
  
            .legal {
              font-size: 12px;
              margin: 0;
            }
  
            svg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transform: scaleY(3) scaleX(2.25);
              transform-origin: bottom;
              box-sizing: border-box;
              display: block;
              pointer-events: none;
            }
  
            footer {
              overflow: hidden;
              left: 0;
              bottom: 0;
              display: flex;
              width: 100%;
              height: 370px;
            }
  
            section {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              gap: 30px;
              padding-bottom: 60px;
              padding-left: 60px;
              width: 100%;
            }
  
            @media (min-width: 420px) {
              section {
                align-items: center;
                padding-left: 0;
                gap: 20px;
              }
  
              .links {
                gap: 20px;
                flex-direction: row;
              }
            }
          `}
        </style>
        <footer className="relative">
          <div className="background mt-10">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900">
              <defs>
                <linearGradient id="bg" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(53, 127, 242, 0.6)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(38, 89, 190, 0.06)' }} />
                </linearGradient>
                <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
              </defs>
              <g>
                <use href="#wave" opacity=".3">
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                </use>
                <use href="#wave" opacity=".6">
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                </use>
                <use href="#wave" opacity=".9">
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="4s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                </use>
              </g>
            </svg>
          </div>
  
          <section>
            <ul className="links ">
              <li><a href="/">Home</a></li>
              <li><a href='#about'>Contact US</a></li>
              <li><a href="#Experience">Past Experience</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
            <ul><li id="about">Email: Shakktii.ai@gmail.com</li></ul>
            <p className="legal">© 2024 All rights reserved</p>
          </section>
        </footer>
      </>
    );    
  }
  
  export default Footer;
  