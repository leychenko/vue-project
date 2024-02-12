<template>
    <div class="user">
        <div v-if="getUser" class="user__name">
            <span v-if="getUser.displayName">{{ searchName(getUser.displayName) }}</span>
            <span v-else>{{ getUser.email }}</span>
            <div class="user__image">
                <img v-if="getUser.photoURL" :src="getUser.photoURL" alt="image" />
                <img v-else src="@/assets/img/user.jpeg" alt="image" />
            </div>
            <button type="submit" class="user__button" @click="onLogout">
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
            </button>
        </div>
        <button v-else type="button" class="user__button user__button_log" @click="onLogin">
            <font-awesome-icon :icon="['far', 'circle-user']" />
        </button>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';


export default {
    name: 'UserComponent',
	 computed: {
		...mapGetters('auth',['getUser']),
	 },
	 methods: {
		...mapActions('auth', ['loginWithGoogle','logout','setCurrentCart']),
		changeLanguage(lang){
			this.$i18n.locale = lang
			localStorage.setItem('lastLocale',lang)
		},
		onLogin(){
			this.$router.push({
				name:'login'
			})
		},
		onLogout(){
			this.logout()
			this.$router.push({
				name:'login'
			})
		},
		searchName(){
			const name = this.getUser.displayName.match(/^(\S+)\s+(\S)\S*$/u)
			return name[1]
		}
		
	 }
}
</script>

<style lang="scss" scoped></style>
