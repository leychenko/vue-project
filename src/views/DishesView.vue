<template>
	<div class="dishes__container">
		<dishes-component/>
	</div>
</template>

<script>
import DishesComponent from '@/components/DishesComponent.vue';
	export default {
    name: 'DishesView',
    components: { DishesComponent },

}
</script>

<style lang="scss" scoped>

</style>