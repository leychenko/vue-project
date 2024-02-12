<template>
    <div class="header">
        <div class="header__container" :class="{'menu__open': isMenuActive}">
					<button class="header__logo" @click="toHome">
						<img src="@/assets/img/logo.svg" alt="Logo">
						<span>HEALTHY SWITCHER</span>
					</button>
					<button type="button" class="menu__icon icon-menu" @click="toggleMenu"><span></span></button>
            <div class="header__menu menu">
                <div class="menu__body">
                    <div class="menu__list">
                        <router-link v-for="menuItem in menuItemsList" :key="menuItem.to" :to="menuItem.to">{{
                            $t(`menu.${menuItem.titleLabel}`)
                        }}</router-link>
                    </div>
                </div>
					 <div class="menu__action action">
						<div class="action__user">
							<div class="action__cart">
										<router-link :to="{name:'cart'}"><v-badge :content="cartCount">
											<v-icon icon="mdi-cart-outline" size="x-large"></v-icon>
											</v-badge>
										</router-link>
							</div>
							<user-component />
						</div>
						<div class="language-buttons">
									<button type="button" class="language-buttons__button" @click="changeLanguage('en')">
										<img src="https://banner2.cleanpng.com/20180330/zwe/kisspng-england-flag-of-the-united-kingdom-flag-of-great-b-france-5abde290a65fd8.2730033515223937446815.jpg" alt="">
										<span >EN</span>
									</button>

									<button type="button" class="language-buttons__button" @click="changeLanguage('ua')">
										<img src="https://www.freepnglogos.com/uploads/ukraine-flag-png/circle-flag-of-ukraine-png-download-0.png" alt="">
										<span >UA</span>
									</button>
							</div>
					 </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserComponent from '@/components/UserComponent.vue';
export default {
    name: 'HeaderComponent',
	 components: {
		UserComponent,
	 },
    data() {
        return {
            menuItemsList: [
                {
                    to: '/',
                    titleLabel: 'home',
                },
                {
                    to: {
                        name: 'dishes',
                    },
                    titleLabel: 'dishes',
                },
                {
                    to: {
                        name: 'chefs',
                    },
                    titleLabel: 'chefs',
                },
                {
                    to: {
                        name: 'contacts',
                    },
                    titleLabel: 'contacts',
                },
            ],
            isMenuActive: false,
        }
    },
    computed: {
        ...mapGetters('auth', ['getUser']),
        ...mapGetters('cart', ['getFavoriteListCompleted']),
        cartCount() {
            return this.getFavoriteListCompleted.length
        },
        currentUser: {
            get() {
                return this.getUser
            },
            set(val) {
                if (!val) {
                    this.setCurrentCart([])
                }
            },
        },
    },
    created() {
        this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE
    },
    async mounted() {
        if (this.currentUser) await this.loadUserFavoriteDishes(this.currentUser.uid)
    },
    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout', 'setCurrentCart']),
        ...mapActions('users', ['loadUserFavoriteDishes']),
        changeLanguage(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLocale', lang)
        },
        onLogin() {
            this.$router.push({
                name: 'login',
            })
        },
        onLogout() {
            this.logout()
            this.$router.push({
                name: 'login',
            })
        },
        toggleMenu() {
            return (this.isMenuActive = !this.isMenuActive)
        },
		  toHome(){
			this.$router.push({
				name:"home"
			})
		  }
    },
}
</script>

<style lang="scss" scoped></style>
