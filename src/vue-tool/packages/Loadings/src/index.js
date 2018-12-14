export default {
	computed:{
		spiner(){
			return {
				circleXuan:`<svg class="lds-message" width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					    <g transform="translate(20 50)">
					        <circle cx="0" cy="0" r="7" fill="#e15b64" transform="scale(0.99275 0.99275)">
					            <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
					        </circle>
					    </g>
					    <g transform="translate(40 50)">
					        <circle cx="0" cy="0" r="7" fill="#f47e60" transform="scale(0.773605 0.773605)">
					            <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
					        </circle>
					    </g>
					    <g transform="translate(60 50)">
					        <circle cx="0" cy="0" r="7" fill="#f8b26a" transform="scale(0.42525 0.42525)">
					            <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
					        </circle>
					    </g>
					    <g transform="translate(80 50)">
					        <circle cx="0" cy="0" r="7" fill="#abbd81" transform="scale(0.113418 0.113418)">
					            <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
					        </circle>
					    </g>
					</svg>`
			}[this.icon]
		}
	}
};

      