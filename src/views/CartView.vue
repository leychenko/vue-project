<template>
	<div class="cart__container">
		<div v-if="isEmptyList">
			<div class="cartNull">
				<div class="cartNull__img">
					<img src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-realistic-style-shopping-cart-clipart-png-image_6024510.png" alt="">
				</div>
				<div><h2 class="cartNull__title">{{$t('cart.cartNull')}}</h2>
				</div>
			</div>
		</div>
		<div v-else >
			<div class="cart-wrapper">
				<div class="cart-box">
					<h1 class="cart-title">{{$t('cart.title')}}</h1>
					<cart-component v-for="item in getFavoriteListCompleted" :key="item.id" :data="item" @delete="onDelete"/>
				</div>
				<div class="total cart-title">{{ $t('cart.totalPrice')}} :  {{getTotalPrice}} {{$t('cardData.currency')}}</div>
			</div>
		</div>
	</div>
	<div class="cartNull__action">
		<router-link :to="{name:'dishes'}" class="cartNull__button button">{{$t('cart.cartLinkBack')}}</router-link>
		<button v-if="!isEmptyList" type="button" class="cartNull__button button" @click="testCart">{{$t('cart.cartBill')}}</button>
		
		</div>
</template>

<script>
import CartComponent from '@/components/CartComponent.vue';
import {mapGetters, mapActions } from 'vuex';



	export default {
		name:'CartView',
		components: {
			CartComponent,
		},
		data() {
			return {
				cartList: null,
				message:null,
				countPrice:1,
				totalPriceDish:[]
			}
		},
		computed: {
			...mapGetters('auth',['getUser']),
			...mapGetters('cart',['getFavoriteListCompleted']),
			isEmptyList(){
				return !this.getFavoriteListCompleted.length
			},
			myUserId() {
			return this.getUser.uid
		},
		getTotalPrice(){
		 return  this.getFavoriteListCompleted?.reduce((acc,el)=> acc + el.price,0) 
		},
	 },
 async mounted () {
	if(this.getUser)
	 await this.loadUserFavoriteDishes(this.myUserId)
},

	 methods: {
		...mapActions('cart',['loadList','setCurrentCart']),
		...mapActions('users',['loadUserFavoriteDishes','removeUserFavoriteDish']),

		 onDelete(data) {
			this.removeUserFavoriteDish({
				userId: this.myUserId,
				dishId: data.id
			});
        },
	 },
		
	}
</script>

<style lang="scss" scoped>

</style>