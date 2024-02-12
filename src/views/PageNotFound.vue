

		<template #main>
			<div class="notFound">
				<font-awesome-icon :icon="['fas', 'ban']" class="notFound__icon" />
				<h1 class="notFound__title">404 {{$t('notFound.title')}}</h1>
				<router-link :to="{name:'home'}" class='button notFound__button'><font-awesome-icon :icon="['fas', 'house']" /> <span>{{$t('notFound.button')}}</span></router-link>
			</div>
		</template>



<script>

	export default {
    name: 'PageNotFound',
  
}
</script>

<style lang="scss" scoped>

</style>