<template>
   <div class="chefs__container">
		 <chefs-component/>
	</div>
</template>

<script >
import ChefsComponent from '@/components/ChefsComponent.vue';

export default {
    name: 'ChefsView',
	 components: { ChefsComponent },
    
}
</script>
<style lang="scss" scoped>
.about{
	color: #fff;
}
</style>