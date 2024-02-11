function LogoDark ({ className }) {
	return (
	  <svg
	    xmlns="http://www.w3.org/2000/svg"
	    data-name="Layer 3"
	    viewBox="0 0 54 55.84"
	    className={ className }
	  >
	    <defs>
	      <linearGradient
	        id="a"
	        x1={27}
	        x2={27}
	        y1={55.84}
	        gradientUnits="userSpaceOnUse"
	      >
	        <stop offset={0} stopColor="#463E78" />
	        <stop offset={1} stopColor="#1E3866" />
	      </linearGradient>
	    </defs>
	    <path
	      fill="url(#a)"
	      d="M45.67 0H7.58C1.16 0 0 7.42 0 7.42v40.75c0 2.58 1.33 7.67 6.75 7.67h9.5l5.42-4.92a11.76 11.76 0 0 0 5.33.5c5-.69 11.65-3.87 11.88-13.17.35-14.75.21-29.42.21-29.42l6.08-.08s-.08 21 0 30.92-11.34 16.16-11.34 16.16h12.34A8.92 8.92 0 0 0 54 47.08V7.33C54 5 51.92 0 45.67 0Zm-29 8.82c4-.14 13.72 0 13.72 0V37c0 .2-.6 5.9-5.31 5.88a6.55 6.55 0 0 1-6.75-5.71 11.58 11.58 0 0 1 .06-3.86L8.25 39.29V17.2a9 9 0 0 1 8.46-8.38Z"
	    />
	  </svg>
	)
}

function LogoLight ({ className }) {
	return (
		<svg
		    xmlns="http://www.w3.org/2000/svg"
		    data-name="Layer 3"
		    viewBox="0 0 54 55.84"
		    className={ className }
		  >
		    <defs>
		      <linearGradient
		        id="a"
		        x1={27}
		        x2={27}
		        y1={55.84}
		        gradientUnits="userSpaceOnUse"
		      >
		        <stop offset={0} stopColor="#D2C9F2" />
		        <stop offset={1} stopColor="#dcf1fa" />
		      </linearGradient>
		    </defs>
		    <path
		      fill="url(#a)"
		      d="M45.67 0H7.58C1.16 0 0 7.42 0 7.42v40.75c0 2.58 1.33 7.67 6.75 7.67h9.5l5.42-4.92a11.76 11.76 0 0 0 5.33.5c5-.69 11.65-3.87 11.88-13.17.35-14.75.21-29.42.21-29.42l6.08-.08s-.08 21 0 30.92-11.34 16.16-11.34 16.16h12.34A8.92 8.92 0 0 0 54 47.08V7.33C54 5 51.92 0 45.67 0Zm-29 8.82c4-.14 13.72 0 13.72 0V37c0 .2-.6 5.9-5.31 5.88a6.55 6.55 0 0 1-6.75-5.71 11.58 11.58 0 0 1 .06-3.86L8.25 39.29V17.2a9 9 0 0 1 8.46-8.38Z"
		    />
  		</svg>
	)
}

export {
	LogoDark,
	LogoLight
}