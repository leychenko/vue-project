<template>
	<div class="error-container">
			<div class="error__content">
				<h3 >{{ $t('error.title') }}...</h3>
				<font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="2x"/>
				<h2>{{ hasError }}</h2>
			</div>
			<button type="button" class="button" @click="onBack">{{$t('loginPage.errorBtn')}}</button>
		</div>
</template>

<script>
import { mapGetters } from 'vuex';


	export default {
		name:'ErrorComponent',
		computed: {
			...mapGetters('users',['hasError']),
		},
		methods: {
			onBack() {
				this.$router.go(0)
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>