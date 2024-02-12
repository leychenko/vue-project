<template>
    <div class="dishes__card card">
        <div class="card__image">
            <img :src="data.img" alt="" />
        </div>
        <div class="card__body">
            <h5 class="card__title">
                {{ data.title }}
                <p class="card__subtitle">{{ data.subTitle }}</p>
            </h5>
            <div class="card__text">
                <p>{{ data.text }}</p>
            </div>
				<div class="card__price">{{ $t('cardData.title') }}: {{data.price}} 
					<span>{{$t('cardData.currency')}}</span>
				</div>
        </div>
        <div class="card__action">
            <slot> </slot>
				<button  type="button" :disabled="!getUser" class="card__button" @click="onAddToCart(data)">
                <span>{{ $t('cardData.button') }}</span>
            </button>
        </div>
    </div>
	 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DishesItem',

    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapGetters('auth', ['getUser']),

		  	myUserId(){
				return this.getUser.uid
			},
    },
    methods: {
        ...mapActions('dishes', ['addItem']),
		  ...mapActions('cart',['toggleIsFavorite','getItemByIdFromList','addItemToCartList']),
		  ...mapActions('users',['addUserFavoriteDishes']),
        
		  onAddToCart(data){
			this.addUserFavoriteDishes({
				userId: this.myUserId,
				dishId: data.id
			})
		},
    },
}
</script>

<style lang="scss" scoped></style>
