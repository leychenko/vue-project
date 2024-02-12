<template>
    <div class="main-container">
        <a href="#" class="main__item" >
            <div class="main__image">
                <img src="@/assets/img/gallary/gallary-04.jpg" alt="img" />
            </div>
            <div class="main__content">
                <div class="main__title"><p class="main__title_subtitle">{{$t('mainCard.subtitle')}}</p> <p>{{$t('mainCard.title')}}</p></div>
                <div class="main__text">
                    {{$t('mainCard.text')}}
                </div>
            </div>
        </a>
		  <a href="#" class="main__item main__item_2" >
            <div class="main__image">
                <img src="@/assets/img/gallary/gallary-03.jpg" alt="img" />
            </div>
            <div class="main__content main__content_2">
                <div class="main__title"><p class="main__title_subtitle">{{$t('mainCard.subtitle2')}}</p> <p>{{$t('mainCard.title2')}}</p></div>
                <div class="main__text">
                    {{$t('mainCard.text2')}}
                </div>
            </div>
        </a>
		  	<div class="image">
				<img src="@/assets/img/gallary/main-image.jpg" alt="picture">
			</div>
    </div>
</template>

<script>
export default {
    name: 'MainComponent',
}
</script>

<style lang="scss" scoped></style>
