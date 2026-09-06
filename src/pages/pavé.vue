<script setup>
import agglos from '@/assets/img/agglos.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
import poutrelle_image from '@/assets/img/poutrelle-precontraintes.jpg'
import pavé from '@/assets/img/pavé.jfif'
</script>

<template>
    <!--------- TITLE SECTION ----------------->
    <!----------------------------------------->
    <section class="bg-gray-100 p-10 mt-30 m-10">
        <section class="title-section w-full flex flex-col items-center justify-center gap-5">
            <h1 class="text-blue-700 text-4xl font-bold">{{ $t("products.pavé_title") }}</h1>
            <p class="text-xl text-center max-w-5xl">{{ $t("products.pavé_text") }}</p>
        </section>
        <!---------------------------------------------->
        <!--------- AGGLOS CONTENT ----------------------->
        <!------------------------------------------------>
        <section class="agglo-products flex w-full gap-3 p-2 mt-20 bg-gray-200">

            <div class="img w-3/5 h-full">
                <img class="w-full h-full border-blue-700 border-4" :src="pavé" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10r">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE DE PAVé</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">PAVé H cm :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">PAVé Carrée :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">PAVé Pata :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">Concrete paving blocks manufactured from a durable mixture of cement,
                        aggregates, and water. They are designed to provide a strong, resistant, and attractive surface
                        for outdoor areas such as sidewalks, driveways, courtyards, parking areas, and pedestrian zones.
                    </p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Shape / Type</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pavé H</td>
                        <td>H-shaped</td>
                        <td>Driveways, courtyards & parking areas</td>
                        <td>Interlocking concrete paving block designed to provide a stable and resistant surface for
                            pedestrian and vehicle areas..</td>
                    </tr>
                    <tr>
                        <td>Pavé Carré</td>
                        <td>Square</td>
                        <td>Walkways, courtyards & terraces</td>
                        <td>Square concrete paving block suitable for creating clean, uniform, and durable outdoor
                            surfaces.</td>
                    </tr>
                    <tr>
                        <td>Pavé Pata</td>
                        <td>Pata-shaped</td>
                        <td>Walkways, courtyards & landscaping</td>
                        <td>Decorative and durable concrete paving block suitable for outdoor surfaces, pathways, and
                            landscaping applications.</td>
                    </tr>
                </tbody>
            </table>



        </section>
    </section>

    <section class="other-products lg:p-10 bg-gray-200 lg:m-10">
        <div class="product-container grid grid-cols-3 gap-5">
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
                        <h1 class="text-xl">{{ $t("products.poutrelle_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.poutrelle_text") }}</p>
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
                        <h1 class="text-xl">{{ $t("products.treillis_title") }}</h1>
                        <p class="text-sm flex-1">{{ $t("products.treillis_text") }}</p>
                        <button class="w-full bg-blue-900 p-5 cursor-pointer">download the pdf</button>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>


<style scoped>
th,
td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
}

@media (max-width:1450px) {
    .product-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .agglo-products {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .img,
    .intro {
        width: 100%;
    }

    .table-values {
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }

    .table-values table {
        min-width: 1400px;
    }

}

@media (max-width:700px) {
    .product-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 20px;
    }

}
</style>