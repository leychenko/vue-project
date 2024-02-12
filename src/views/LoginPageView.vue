<template>	
	<error-component v-if="hasError" />
    <master-page-view v-else>

        <template  #main>
            <div class="login__container">
            	<div class="login-page">
	                <h2 class="login-page__title title title_small">{{ $t('loginPage.title') }}</h2>
	                <div class="login-page__body">
	                    <v-form v-model="valid" class="form">
	                        <v-text-field
	                            v-model="user.email"
	                            :rules="emailRules"
										 :label="$t('loginPage.email')"
	                            type="email"
	                            :append-icon="countRanks"
	                            variant="outlined"
										 
	                            clearable
	                            hide-details="auto"
	                            required
	                            class="mb-4 input"
	                        />
	                        <v-text-field
	                            v-model="user.password"
	                            :rules="passwordRules"
										 :label="$t('loginPage.password')" 
	                            variant="outlined"
	                            :append-icon="countRanks2"
	                            :type="show ? 'text' : 'password'"
	                            :hint="
	                                isEngLanguage
	                                    ? 'Enter your password (minimum 6 characters)'
	                                    : 'Введіть пароль (мін. 6 символів)'
	                            "
	                            clearable
	                            hide-details="auto"
	                            required
	                            class="mb-4 input"
	                            @click:append="show = !show"
	                        ></v-text-field>
	                        <div class="form__action action">
	                        	<v-btn variant="outlined" class="action__button" :disabled="!isValueValid" @click="registerWithEmailAndPassword(user)">
		                            {{ $t('loginPage.button') }} </v-btn
		                        ><v-btn variant="outlined" class="action__button" :disabled="!isValueValid" @click="loginWithEmailAndPassword(user)">
		                            {{ $t('loginPage.buttonSignIn') }}
		                        </v-btn>
	                        </div>
	                        <button type="button" class="form-google" @click="onLoginWithGoogle">
	                            <font-awesome-icon :icon="['fab', 'google']" /><span> {{ $t('loginPage.google') }}</span>
	                        </button>
	                    </v-form>
	                </div>
	            </div>
            </div>
        </template>
    </master-page-view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MasterPageView from '@/masterpage/MasterPageView.vue'
import ErrorComponent from '@/components/ErrorComponent.vue';
export default {
    name: 'LoginPageView',

    components: {
        MasterPageView,ErrorComponent
    },
    data() {
        return {
            valid: false,
            show: false,
            user: {
                email: null,
                password: null,
            },
            emailRules: [
                (value) => {
                    if (value) return true
                    return this.isEngLanguage ? 'E-mail is requred.' : "Обов'язкове поле"
                },
                (value) => {
                    if (/.+@.+\..+/.test(value)) return true
                    return this.isEngLanguage ? 'E-mail must be valid.' : 'Невірний формат електронної пошти'
                },
            ],

            passwordRules: [
                (value) => {
                    if (value) return true
                    return this.isEngLanguage ? 'Password is required.' : "Обов'язкове поле"
                },
                (value) => {
                    if (value?.length >= 6) return true
                    return this.isEngLanguage
                        ? 'Password must be 6 characters at least.'
                        : 'Пароль повинен складатися з мінім. 6 символів '
                },
            ],
				
        }
    },
    computed: {
		...mapGetters(['hasError']),
        ...mapGetters('auth', ['getUser']),
		  countRanks() {
			 const screenWidth = window.screen.width
			 if(screenWidth < 506){
				return false
			 }
			 return 'mdi-email'
		  },
		   countRanks2() {
			 const screenWidth = window.screen.width
			 if(screenWidth < 506){
				return false
			 }
			 return this.show ? 'mdi-eye-outline' : 'mdi-eye-off'
		  },
        isEngLanguage() {
            return this.$i18n.locale == 'en' ? true : false
        },
        errorMsg1() {
            return this.$i18n.locale == 'en'
                ? 'User is already registered - please, login'
                : 'Користувач вже зареєстрований - будь ласка, увійдіть'
        },
        errorMsg2() {
            return this.$i18n.locale == 'en'
                ? 'User not found - please, register (sign up)'
                : 'Користувач не знайдений - будь ласка, зареєструйтесь'
        },
        isValueValid() {
            return /.+@.+\..+/.test(this.user.email) && /\d{6}/.test(this.user.password)
        },
		  
    },

	//  },
    created() {
        this.loadList;
    },
	 
	 beforeUnmount() {
			this.setError(null);
		},

    methods: {
        ...mapActions('auth', [
            'loginWithGoogle',
            'signUpWithWithEmailAndPassword',
            'signInWithWithEmailAndPassword',
            'getAuthData',
        ]),
        ...mapActions('users',['setError']),

        async onLoginWithGoogle() {
            try {
              const success = await this.loginWithGoogle()
				  if(success)
                this.$router.push({
                    name: 'dishes',
                })
            } catch (error) {
                this.setError(error)
            }
        },
        async registerWithEmailAndPassword(user) {
            const { email, password } = user
            try {
                await this.signUpWithWithEmailAndPassword({ email, password })
                this.$router.push({
                    name: 'dishes',
                })
            } catch (error) {
                if (error == 'Firebase: Error (auth/email-already-in-use).') {
                    this.setError(this.errorMsg1);
                }
            }
        },

        async loginWithEmailAndPassword(user) {
            const { email, password } = user
            try {
                await this.signInWithWithEmailAndPassword({ email, password })
                this.$router.go(-1)
            } catch (error) {
                if (error.message == 'Firebase: Error (auth/invalid-credential).') {
                    this.setError(this.errorMsg2)
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
