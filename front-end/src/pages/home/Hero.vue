<!-----------  js --------------------->
<script setup>
//-------------- IMPORT FUNCTIONS AND LAIBRARIES---------------
import gsap from 'gsap';
import { onMounted } from 'vue';
import { SplitText } from 'gsap/all';



//-------------- GSAP ANIMATION ---------------
onMounted(() => {
    gsap.registerPlugin(SplitText);

    const split = SplitText.create("#hero-text", {
        type: "chars"
    })

    gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "elastic.inOut(1, 1)"
    })
    gsap.from(".hero-section", { opacity: 0, duration: 1 })


})

</script>



<!----------- HTML--------------------->
<template>
    <section class="hero-section flex items-center justify-center lg:p-10  ">

        <!----------- HERO SECTION --------------------->
        <!----------- --------------------->

        <div class="left-section flex items-center justify-center flex-col  gap-5 text-white text-center  ">
            <h1 id="hero-text" class="text-9xl font-bold">STé SEMADIV S.A.R.L</h1>
            <h4 class="text-xl max-w-2xl">{{ $t("hero.subtitle") }}</h4>
            <p class="text-sm max-w-xl ">{{ $t("hero.title") }}</p>
            <div class="left-section-buttons flex flex-col gap-3">
                <router-link to="/homeproductpage">
                    <button class=" w-100 py-3 px-6 bg-blue-700 text-white cursor-pointer">{{ $t("hero.productbutton")
                        }}
                    </button>
                </router-link>
                <router-link to="/contact">
                    <button class=" w-100 py-3 px-6 bg-blue-700 text-white cursor-pointer">{{ $t("hero.contactbutton")
                        }}</button>

                </router-link>
            </div>
        </div>
        <!----------------------------->
        <!----------------------------->
    </section>
</template>


<!----------- STYLE CSS --------------------->

<style scoped>
.hero-section {
    margin-top: 100px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../assets/img/hero.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
}

.left-section h1 {
    -webkit-text-stroke: 1px #fff;
    color: transparent;
}

/*------------ MEDIA QUERY -----------*/

@media (max-width: 440px) {
    .left-section h1 {
        font-size: 100px;
    }

}
</style>