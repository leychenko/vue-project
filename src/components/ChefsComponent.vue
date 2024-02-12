<template>
<div class="chefsPage">
		<master-page-view>
			<template #main>
				<div class="chefsPage__wrapper chef">
					<div v-for="chef in getList" :key="chef.id" class="chef__card">
						<div class="chef__image">
							<img :src="chef.img"  alt="">
						</div>
						<div class="chef__body">
							<div class="chef__name">
								<p>{{ chef.name }} {{ chef.secondName }}</p>
								<p>{{chef.oldYear}} {{$t("chefCard.year")}}</p>
							</div>
							<div class="chef__nomination">
								<p>Нагороди :</p>
								<div v-if="chef.awards">{{chef.awards.join()}}</div>
								<p>{{$t('chefCard.text') }} - {{chef.experience}} {{$t("chefCard.year")}}</p>
							</div>
							<div class="chef__rating">
								 {{$t("chefCard.rating")}} - {{ chef.rating }}<span> <font-awesome-icon :icon="['fas', 'star']" /></span>
							</div>
						</div>
					</div>
				</div>
					
			</template>
		</master-page-view>
    </div>
</template>

<script>
import MasterPageView from '@/masterpage/MasterPageView.vue';
import {mapGetters,mapActions} from 'vuex';

	export default {
		name:'ChefsComponent',
		components: { MasterPageView },
		data() {
		return {
			chefObj:{},

		}
	 },
    computed: {
    ...mapGetters('chefsData',['getList']),
    },
	 created () {
		this.loadList()
	 },
	 methods: {
		...mapActions('chefsData',['addItem','loadList']),
		onTest(){
			this.addItem(this.chefObj)
			this.chefObj = {}
		}
		
	 },
	}
</script>

<style lang="scss" scoped>

</style>