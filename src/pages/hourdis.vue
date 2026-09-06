<script setup>
import agglos from '@/assets/img/agglos.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
import poutrelle_image from '@/assets/img/poutrelle-precontraintes.jpg'
import hourdis from '@/assets/img/hourdis.jfif'
</script>

<template>
    <!--------- TITLE SECTION ----------------->
    <!----------------------------------------->
    <section class="bg-gray-100 p-10 mt-30 m-10">
        <section class="title-section w-full flex flex-col items-center justify-center gap-5">
            <h1 class="text-blue-700 text-4xl font-bold">{{ $t("products.agglos_title") }}</h1>
            <p class="text-xl text-center max-w-5xl">{{ $t("products.agglos_text") }}</p>
        </section>
        <!---------------------------------------------->
        <!--------- AGGLOS CONTENT ----------------------->
        <!------------------------------------------------>
        <section class="agglo-products flex w-full gap-3 p-2 mt-20 bg-gray-200">

            <div class="img w-3/5 h-full">
                <img class="w-full h-full border-blue-700 border-4" :src="hourdis" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE D'HOURDIS</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">HOURDIS 8 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">HOURDIS 12 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">HOURDIS 16 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">HOURDIS 20 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">HOURDIS 25 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">Precast concrete floor filler blocks used together with prestressed or
                        reinforced concrete beams to form lightweight and durable floor systems. They help fill the
                        space between beams, reduce the overall weight of the floor, and contribute to good structural
                        stability and thermal and acoustic performance.</p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Height</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hourdis 8</td>
                        <td>8 cm</td>
                        <td>Lightweight floor systems</td>
                        <td>Precast concrete filler block designed for floor construction, helping reduce the weight of
                            the structure.</td>
                    </tr>
                    <tr>
                        <td>Hourdis 12</td>
                        <td>12 cm</td>
                        <td>Floor systems</td>
                        <td>Precast concrete filler block used between floor beams to provide a stable and durable floor
                            structure..</td>
                    </tr>
                    <tr>
                        <td>Hourdis 16</td>
                        <td>16 cm</td>
                        <td>Floor systems</td>
                        <td>Concrete filler block designed for floor construction, providing reliable support and
                            contributing to an efficient floor system.</td>
                    </tr>
                    <tr>
                        <td>Hourdis 20</td>
                        <td>20 cm</td>
                        <td>Floor systems</td>
                        <td>Precast concrete filler block suitable for floor structures requiring greater depth and
                            structural performance..</td>
                    </tr>
                    <tr>
                        <td>Hourdis 25</td>
                        <td>25 cm</td>
                        <td>Floor systems</td>
                        <td>Larger precast concrete filler block designed for floor systems requiring increased depth
                            and efficient load distribution.</td>
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