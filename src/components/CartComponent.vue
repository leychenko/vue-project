<template>

		<div class="cart-item">
			<div class="cart-item__img">
	            <img :src="data.img" alt="food" />
	        </div>
			  <div class="cart-item__title">
	            <p>{{ data.title }}</p>
	        </div>
			  <div class="cart-item__price">
	            <p>{{ data.price }} {{$t('cardData.currency')}}</p>
	        </div>
			  <button type="button" class="cart-item__button" @click="onDeleteClick">
				<span v-if="checkWidth" class="deleteClass">{{checkWidth}}</span>
				<span v-else><font-awesome-icon :icon="['far', 'trash-can']" /></span>
			</button>
		</div>

</template>

<script>

	export default {
		name:'CartItem',
		 props: {
        data: {
            type: Object,
            required: true,
        },
		  
    },
	  emits:['delete'],
	 data() {
		return {
			el:".app-view",
			width: null,
		}
	 },
	 computed: {
		checkWidth(){
			 if(this.width < 580) 
			 return   this.$i18n.locale == 'en'
                ? 'Delete'
                : 'Видалити'
			return false
		}
	 },
	 created () {
		const onResize = () => this.width = window.innerWidth;
    onResize();
    window.addEventListener('resize', onResize);
     this.$emit('hook:beforeDestroy', () => window.removeEventListener('resize', onResize));
	 },
	
	 
	 
	 methods: {
					onDeleteClick(){          
						this.$emit('delete', this.data)
				},
				
		  },
		  
	}
</script>

<style lang="sass" scoped>

</style>