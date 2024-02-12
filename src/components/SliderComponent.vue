<template>
	 <div class="carousel-container">
	 	<v-carousel
	    cycle
	    height="400"
	    hide-delimiter-background
	    show-arrows="hover" 
		 class="carusel"
	  >
	    <v-carousel-item
	      v-for="slide in slideImg"
	      :key="slide.id"	
	    >
	        <div class="d-flex fill-height justify-center align-center">
	          <div class="text-h2">
	            <img :src="slide.imgSrc" alt="">
	          </div>
	        </div>
	
	    </v-carousel-item>
	  </v-carousel>
	 </div>
</template>

<script>
	export default {
		name:'SliderComponent',
		
		data() {
			return {
				slideImg:[ 
					{imgSrc:require('@/assets/img/slider/01.jpg')},
					{imgSrc:require('@/assets/img/slider/02.jpg')},
					{imgSrc:require('@/assets/img/slider/03.jpg')},
					{imgSrc:require('@/assets/img/slider/04.jpg')},
					{imgSrc:require('@/assets/img/slider/05.jpg')},
					{imgSrc:require('@/assets/img/slider/06.jpg')},
				]
			}
		},


	}
</script>

<style lang="scss" scoped>

</style>