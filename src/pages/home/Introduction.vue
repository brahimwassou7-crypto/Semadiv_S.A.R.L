<!-----------  js --------------------->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import produit1 from '@/assets/img/produit1.jpg'
import produit2 from '@/assets/img/produit2.jpg'
import produit3 from '@/assets/img/produit3.jpg'
import produit4 from '@/assets/img/produit4.jpg'
import produit5 from '@/assets/img/produit5.jpg'
import uzine1 from '@/assets/img/uzine.jpg'
import uzine2 from '@/assets/img/uzine2.jpg'
import uzine3 from '@/assets/img/uzine3.webp'

const images = [
    { img: produit1 },
    { img: produit2 },
    { img: produit3 },
    { img: produit4 },
    { img: produit5 },
]

const images2 = [
    { img: uzine1 },
    { img: uzine2 },
    { img: uzine3 },
]

</script>

<!----------- HTML--------------------->
<template>

    <!--------- INTRODUCTION SECTION --------------->
    <!--------- -------------------- --------------->

    <section class="title-section w-full flex flex-col items-center justify-center text-center gap-3 p-5 mt-3">

        <!---------------- SECTION TITLE -------------->

        <h1 class="text-3xl font-bold text-blue-700">{{ $t("intro.title") }}</h1>
        <p class="text-sm max-w-5xl">{{ $t("intro.text") }}</p>
    </section>


    <section class="presentation-section flex flex-col mt-20 mb-20 lg:p-10">

        <!---------------- PRODUCTS SECTION -------------->
        <!---------------- ----------------- -------------->

        <div class="products-presentation-section flex items-center justify-center gap-5 ">
            <!---------------- LEFT SECTION -------------->
            <div class="left-section w-1/2 px-10 flex items-center justify-center">
                <swiper :modules="[Navigation, Pagination, Autoplay]" :navigation="true"
                    :pagination="{ clickable: true }" :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
                    :slides-per-view="1" :loop="true">
                    <SwiperSlide v-for="(img, index) in images" :index="index">
                        <div class="swiper-img flex items-center justify-center">
                            <img class="h-80 w-100 object-cover -skew-x-10" :src="img.img" alt="">
                        </div>
                    </SwiperSlide>
                </swiper>

            </div>

            <!---------------- RIGHT SECTION -------------->

            <div class="right-section w-1/2 flex flex-col justify-center items-center gap-5 px-5">
                <h1 class="text-3xl font-bold text-blue-700"> {{ $t("intro.products") }}</h1>
                <p class="max-w-3xl">{{ $t("intro.products_text") }}</p>
            </div>

        </div>


        <!---------------- WORK SECTION -------------->
        <!---------------- ----------------- -------------->

        <div class="work-presentation-section flex items-center justify-center">


            <!---------------- LEFT SECTION -------------->

            <div class="right-section-2 w-1/2 flex flex-col justify-center items-center gap-5 px-5">
                <h1 class="text-3xl font-bold text-blue-700"> {{ $t("intro.projects") }}</h1>
                <p class="max-w-3xl">{{ $t("intro.projects_text") }}</p>
            </div>

            <!---------------- RIGHT SECTION -------------->

            <div class="left-section w-1/2 px-10 flex items-center justify-center">
                <swiper :modules="[Navigation, Pagination, Autoplay]" :navigation="true"
                    :pagination="{ clickable: true }" :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
                    :slides-per-view="1" :loop="true">
                    <SwiperSlide v-for="(img, index) in images2" :index="index">
                        <div class="swiper-img flex items-center justify-center">
                            <img class="h-80 w-100 object-cover -skew-x-10" :src="img.img" alt="">
                        </div>
                    </SwiperSlide>
                </swiper>

            </div>
        </div>
    </section>
</template>


<!----------- STYLE CSS --------------------->
<style scoped>
/* -------------------- MEDIA QUERY -------------------- */

@media (max-width : 1246px) {

    .products-presentation-section,
    .work-presentation-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 100px;
    }

    .right-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }

    .right-section-2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
    }

    .presentation-section {
        width: 100%;
        gap: 10px;
    }

    .left-section {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: end;
    }

}

@media (max-width: 539px) {
    .swiper-img img {
        width: 250px;
        height: 300px;
    }

}
</style>