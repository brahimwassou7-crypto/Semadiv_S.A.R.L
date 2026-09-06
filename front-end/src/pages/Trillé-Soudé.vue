<script setup>
import agglos from '@/assets/img/agglos.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
import poutrelle_image from '@/assets/img/poutrelle-precontraintes.jpg'
</script>

<template>
    <!--------- TITLE SECTION ----------------->
    <!----------------------------------------->
    <section class="bg-gray-100 p-10 mt-30 m-10">
        <section class="title-section w-full flex flex-col items-center justify-center gap-5">
            <h1 class="text-blue-700 text-4xl font-bold">{{ $t("products.treillis_title") }}</h1>
            <p class="text-xl text-center max-w-5xl">{{ $t("products.treillis_text") }}</p>
        </section>
        <!---------------------------------------------->
        <!--------- AGGLOS CONTENT ----------------------->
        <!------------------------------------------------>
        <section class="agglo-products flex w-full gap-3 p-2 mt-20 bg-gray-200">

            <div class="img w-3/5 h-full">
                <img class="w-full h-full border-blue-700 border-4" :src="poutrelle" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE Poutrelle Treillié Soudé</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle Treillié Soudé 3.61_4.90 :</span>
                    <span>150 ml/JOUR</span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle Treillié Soudé 4.91_5.80 :</span>
                    <span>150 ml/JOUR</span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle Treillié Soudé 5.81_7.00 :</span>
                    <span>150 ml/JOUR</span>
                </div>

                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">A reinforced concrete floor beam made with a welded steel lattice structure and
                        concrete. It is designed to provide support and stability in floor systems and is commonly used
                        in residential and building construction. Its welded reinforcement structure ensures good
                        mechanical resistance and facilitates installation on construction sites..</p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Length Range</th>
                        <th>Type</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Poutrelle Treillis Soudé 3.61–4.90</td>
                        <td>3.61 – 4.90 m</td>
                        <td>Treillis soudé</td>
                        <td>Floor construction</td>
                        <td>Welded lattice floor beam designed for short to medium spans, providing reliable support and
                            stability.</td>
                    </tr>
                    <tr>
                        <td>Poutrelle Treillis Soudé 4.91–5.80</td>
                        <td>4.91 – 5.80 m</td>
                        <td>Treillis soudé</td>
                        <td>Floor construction</td>
                        <td>Welded lattice floor beam suitable for medium spans, offering strength, stability, and
                            efficient load distribution.</td>
                    </tr>

                    <tr>
                        <td>Poutrelle Treillis Soudé 5.81–7.00</td>
                        <td>5.81 – 7.00 m</td>
                        <td>Treillis soudé</td>
                        <td>Floor construction.</td>
                        <td>Welded lattice floor beam designed for longer spans, providing reliable structural support
                            and durability.</td>
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
            <router-link to="/poutrelle-precontrainte">
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