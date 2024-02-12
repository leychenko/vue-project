<template>
    <div class="wrapper">
    	<header-component />
	    <div class="main">
			<slot name="main"></slot>
		</div>
		<div class="footer">
			 <slot name="footer">
				<p> ⓒ HEALTHY SWITCHER</p>
			 </slot>
		</div>
    </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    name: 'MasterPageView',
	 components: {
		HeaderComponent,
	 },
	
}
</script>

<style lang="scss" scoped>



</style>
