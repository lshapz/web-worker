<template>
	<div class="box">
	    <div class="boxCorner1"></div>
	    <div class="boxCorner2"></div>
  </div>

</template>

<script>
import Velocity from 'velocity-animate'


export default {
	mounted(){
	  var vm = this
	  // credit to https://codepen.io/timothyrourke/pen/syuga for the animation 
      Velocity(vm.$el,
        { 	
	    	rotateX: '360deg',
			rotateY: '360deg' 
  		},
        {
			duration:2000,
			loop:true,
			easing:'linear'
        })

	}

}

</script>

<style>

/*body {
  padding-top: 2em;
  background-image: radial-gradient(circle, #555, #333 90%);
  -webkit-perspective: 800px;
          perspective: 800px;
}
*/
.box {
  margin: 4em auto;
  width: 10em;
  height: 10em;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50% -5em;
          transform-origin: 50% 50% -5em;
  position: relative;
  -webkit-transform: rotateX(-45deg);
          transform: rotateX(-45deg);
}

.box div {
  position: absolute;
  width: 10em;
  height: 10em;
  background-color: #4c4c4c;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

.boxCorner2 {
  -webkit-transform: rotateX(180deg) translateZ(10em);
          transform: rotateX(180deg) translateZ(10em);
}

.boxCorner1::before, .boxCorner1::after, .boxCorner2::before, .boxCorner2::after {
  position: absolute;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.boxCorner1::before, .boxCorner2::before {
  -webkit-transform: rotateY(90deg);
          transform: rotateY(90deg);
  -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
  background-color: #444;
}

.boxCorner2::before {
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
  -webkit-transform: rotateY(-90deg);
          transform: rotateY(-90deg);
}

.boxCorner1::after, .boxCorner2::after {
  -webkit-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
  -webkit-transform-origin: 50% 0;
          transform-origin: 50% 0;
  background-color: #555;
}

</style>