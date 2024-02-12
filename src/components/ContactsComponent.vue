<template>
	<master-page-view>
		<template #main>
			<div class="container">
				<div class="container__body">
					<h3 class="container__title">{{$t('contact-page.gideTitle')}}</h3>
					<div class="container__info info">
						<div class="info__block">
							<p>{{$t('contact-page.gideText')}}</p>
							<p>Тел :<a href="tel:0448880001">044-888-00-01</a></p>
						</div>
						<div class=""><p>{{$t('contact-page.workingHours')}}</p> Пн-Нд 10:00 - 20:00</div>
					</div>
				</div>
				<div class="container__image">
					<img src="https://na-dache.pro/uploads/posts/2021-04/1619516589_36-p-na-uchastke-italyanskoe-kafe-49.jpg" alt="image">
				</div>
			</div>
			
			<div class="">{{getCartList}}</div>
		</template>
	</master-page-view>
</template>

<script>
import MasterPageView from '@/masterpage/MasterPageView.vue';


	export default {
		name:'ContactsComponent',
		components: { MasterPageView },
		data() {
			return {
				testObj: {}
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>