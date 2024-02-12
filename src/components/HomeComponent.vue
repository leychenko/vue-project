<template>
    <master-page-view>
        <template #main>
            <div class="home__container">
					<slider-component/>
                <div class="home__head">
                    <div class="home__title title">{{ $t('homePage.title') }}</div>
                    <div class="home__text">
                        <p>{{ $t('homePage.text') }}</p>
                    </div>
                </div>
                <router-link :to="{ name: 'dishes' }" class="home__button button">{{
                    $t('homePage.button')
                }}</router-link>
					 <main-component/>
                <div class="home__links links-home">
                    <div class="links-home__info">
                        <font-awesome-icon :icon="['far', 'clock']" class="icon" />
                        <p class="links-home__time">{{ $t('homePage.linkTime.today') }}</p>
                        <p class="links-home__text">{{ $t('homePage.linkTime.workingHours') }}</p>
                    </div>
                    <div class="links-home__info">
                        <font-awesome-icon :icon="['fas', 'location-arrow']" class="icon" />
                        <p class="links-home__time">{{ $t('homePage.linkLocation.adress') }}</p>
                        <p class="links-home__text">{{ $t('homePage.linkLocation.location') }}</p>
                    </div>
                    <a href="tel:+380448880001" class="links-home__info">
                        <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                        <p class="links-home__time">{{ $t('homePage.linkPhone.number') }}</p>
                        <p class="links-home__text">{{ $t('homePage.linkPhone.text') }}</p>
                    </a>
                </div>
            </div>
        </template>
    </master-page-view>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue';
import MasterPageView from '@/masterpage/MasterPageView.vue'
import SliderComponent from '@/components/SliderComponent.vue';
import {mapGetters, mapActions } from 'vuex'

export default {
    name: 'HomeComponent',
    components: {
        MasterPageView,SliderComponent,MainComponent
    },
    computed: {
		...mapGetters('slides',['getList']),
        currentLanguage() {
            return this.$i18n.locale === 'ua' ? 'Українська' : 'English'
        },
    },
   async created() {
        this.loadList()
		  await	this.loadSlidesList()
    },

    methods: {
        ...mapActions('chefsData', ['loadList']),
		  ...mapActions('slides',['loadSlidesList']),
    },
}
</script>

<style lang="scss" scoped></style>
