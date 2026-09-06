<!-----------  js --------------------->
<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.jfif'
import pavé from '@/assets/img/pavé.jfif'
import poutrelle from '@/assets/img/poutrelle.webp'
import poutrelle_image from '@/assets/img/poutrelle-precontraintes.jpg'
import bordure from '@/assets/img/bordure.jpg'

</script>

<!----------- HTML--------------------->
<template>

    <!-------- SECTION TITLE ---------------->

    <section class="title-section w-full flex flex-col items-center justify-center text-center gap-3 p-5 mt-3">
        <h1 class="text-3xl font-bold text-blue-700">{{ $t("products.title") }}</h1>
        <p class="text-sm max-w-5xl">{{ $t("products.text") }}</p>
    </section>

    <!------ PRODUCTS SECTION -------------->
    <!------ ------------------------------->

    <section class="products-section mt-10 flex flex-col ">

        <div class="products-container grid grid-cols-3 gap-5 p-10 items-stretch ">
            <!------------------------------------------>
            <!-------------------- FIRST PRODUCT ---------------------------->
            <router-link to="/agglos">
                <div
                    class="card h-full flex  flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="agglos" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-1 flex-col gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.agglos_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.agglos_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
            <!------------------------------------------>
            <!-------------------- SECOND PRODUCT ---------------------------->
            <router-link to="/Trillé-Soudé">
                <div
                    class="card flex flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="poutrelle" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-1 flex-col gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.treillis_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.treillis_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
            <!------------------------------------------>
            <!-------------------- THIRD PRODUCT ---------------------------->
            <router-link to="/poutrelle-Precontrainte">
                <div
                    class="card flex flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="poutrelle_image" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-1 flex-col gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.poutrelle_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.poutrelle_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
            <!------------------------------------------>
            <!-------------------- FOURTH PRODUCT ---------------------------->
            <router-link to="/pavé">
                <div
                    class="card flex flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="pavé" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-1 flex-col gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.pavé_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.pavé_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
            <!------------------------------------------>
            <!-------------------- FIFTH PRODUCT ---------------------------->
            <router-link to="/bordure">
                <div
                    class="card flex flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="bordure" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-col flex-1 gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.bordure_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.bordure_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
            <!------------------------------------------>
            <!------------------ SIXTH PRODUCT ---------------------------------->
            <router-link to="/hourdis">
                <div
                    class="card flex flex-col items-center relative justify-center gap-5 border-2 border-blue-700 cursor-pointer ">
                    <img class="w-full h-100" :src="hourdis" alt="">
                    <div class=" absolute top-0 right-0 bg-blue-700 p-3 text-white">REFERENCES 3+</div>

                    <div class="content flex flex-col flex-1 gap-5 bg-blue-700 w-full p-5 text-white">
                        <h1 class="text-xl">{{ $t("products.bordure_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.bordure_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
        </div>

    </section>



</template>




<!----------- STYLE CSS --------------------->
<style scoped>
.card:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
    box-shadow: 10px 10px 10px -2px gray;
}

/*------------ MEDIA QUERY -----------*/

@media (max-width:1450px) {
    .products-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width:700px) {
    .products-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 20px;
    }

}
</style>