<template>
	<master-page-view>
		<template #main>
			 <div v-if="!getUser" class="text-center">

      

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="500"
      >
        <v-card>
          <div class="dialog">
          	<div class="dialog__title">
	            {{$t('loginPage.titleLog')}}
	          </div>
	          <v-card-actions class="dialog__action">
	            <button class="dialog__button"  @click="dialog = false">Close</button>
	            <router-link :to="{name:'login'}" class="dialog__link dialog__button">{{$t('loginPage.button')}}</router-link>
	          </v-card-actions>
          </div>
        </v-card>
      </v-dialog>

  </div>

			<div  class="dishes-wrapper">

				<div>
					<div v-if="getList?.length" class="dishes">
						<dishes-item v-for="dishes in getList" :key="dishes.id" :data="dishes">
									<div class="text-center">
										<v-rating
											v-model="dishes.rating"
											hover
											half-increments
											:disabled="!getUser"
											color="yellow"
										></v-rating>
										<pre>{{ dishes.rating }}</pre>
									</div>
						</dishes-item>		
					</div>
				</div>
			</div>
		</template>
	</master-page-view>
</template>

<script>
import MasterPageView from '@/masterpage/MasterPageView.vue';
import DishesItem from '@/components/DishesItem.vue';
import {mapGetters,mapActions} from 'vuex';
	export default {
		name:'DishesComponent',
		    components: { MasterPageView,DishesItem },
			 data: () => ({
      tab: null,
		dialog: true,
    }),
	 computed: {
		...mapGetters('dishes',['getList']),
		...mapGetters('auth',['getUser']),
	 },
	 created () {
		this.loadList()
	 },
	 methods: {
		...mapActions('dishes',['loadList']),
		
	 },
	}
</script>

<style lang="scss" scoped>

</style>