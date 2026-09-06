<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.jfif'
import pavé from '@/assets/img/pavé.jfif'
import poutrelle from '@/assets/img/poutrelle.webp'
import poutrelle_image from '@/assets/img/poutrelle-precontraintes.jpg'
import bordure from '@/assets/img/bordure.jpg'</script>

<template>
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
                <img class="w-full h-full border-blue-700 border-4" :src="agglos" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE D'AGGLOS</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Agglos 7 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Agglos 10 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Agglos 15 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Agglos 20 :</span>
                    <span>22 PALETTE PAR JOUR </span>
                </div>

                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">Agglos (concrete blocks) are masonry blocks manufactured from a mixture of
                        cement, sand,
                        aggregates, and water. The mixture is molded and compacted under pressure, then cured to achieve
                        the required strength and durability. They are mainly used for constructing walls, partitions,
                        foundations, and other building structures.</p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Thickness</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agglos 7</td>
                        <td>7 cm</td>
                        <td>Interior partitions</td>
                        <td>Lightweight concrete block mainly used for interior walls and partitions.</td>
                    </tr>
                    <tr>
                        <td>Agglos 10</td>
                        <td>10 cm</td>
                        <td>Walls & partitions</td>
                        <td>Concrete block suitable for interior partitions and light construction work.</td>
                    </tr>
                    <tr>
                        <td>Agglos 15</td>
                        <td>15 cm</td>
                        <td>Exterior & structural walls</td>
                        <td>Stronger concrete block commonly used for exterior walls and general construction.</td>
                    </tr>
                    <tr>
                        <td>Agglos 20</td>
                        <td>20 cm</td>
                        <td>Structural walls</td>
                        <td>Heavy-duty concrete block designed for robust exterior and structural construction..</td>
                    </tr>
                </tbody>
            </table>



        </section>
    </section>
    <!---------------------------------------->
    <!------------------------------------------->
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
    <!--------------------------------->
    <!-------------------------------->
    <section class="bg-gray-100 p-10 mt-30 m-10">
        <section class="title-section w-full flex flex-col items-center justify-center gap-5">
            <h1 class="text-blue-700 text-4xl font-bold">{{ $t("products.poutrelle_title") }}</h1>
            <p class="text-xl text-center max-w-5xl">{{ $t("products.poutrelle_text") }}</p>
        </section>
        <!---------------------------------------------->
        <!--------- AGGLOS CONTENT ----------------------->
        <!------------------------------------------------>
        <section class="agglo-products flex w-full gap-3 p-2 mt-20 bg-gray-200">

            <div class="img w-3/5 h-full">
                <img class="w-full h-full border-blue-700 border-4" :src="poutrelle_image" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE Poutrelle Precontraint</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle Precontraint 113 Normale :</span>
                    <span>150 ML/JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle Precontaint 114 Normal :</span>
                    <span>150 Ml/JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle SISMIQUE 135 :</span>
                    <span>150 Ml/JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">Poutrelle SISMIQUE 158 :</span>
                    <span>150 Ml/JOUR </span>
                </div>

                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">A prestressed concrete beam manufactured using high-strength concrete and
                        prestressing steel strands. It is designed to support floor systems and transfer loads
                        efficiently while providing high strength, durability, and dimensional stability. Poutrelles
                        précontraintes are commonly used in residential, commercial, and industrial construction.</p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Reference</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Poutrelle Précontrainte 113 Normale</td>
                        <td>Normal</td>
                        <td>113</td>
                        <td>Floor construction</td>
                        <td>Prestressed concrete beam designed for standard floor systems, providing strength,
                            stability, and efficient load distribution.</td>
                    </tr>
                    <tr>
                        <td>Poutrelle Précontrainte 114 Normale</td>
                        <td>Normal</td>
                        <td>114</td>
                        <td>Floor construction</td>
                        <td>Prestressed concrete beam suitable for conventional floor structures, offering durability
                            and reliable load-bearing performance.</td>
                    </tr>
                    <tr>
                        <td>Poutrelle Sismique 135</td>
                        <td>Sismique</td>
                        <td>135</td>
                        <td>Seismic-resistant construction</td>
                        <td>Prestressed concrete beam designed for floor systems where improved resistance and
                            structural performance are required in seismic conditions.</td>
                    </tr>
                    <tr>
                        <td>Poutrelle Sismique 158</td>
                        <td>Sismique</td>
                        <td>158</td>
                        <td>Seismic-resistant construction</td>
                        <td>High-performance prestressed concrete beam designed for demanding floor systems and enhanced
                            structural resistance in seismic areas</td>
                    </tr>
                </tbody>
            </table>



        </section>
    </section>
    <!------------------------------------>
    <!---------------------------------------->
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
    <!------------------------------------->
    <!------------------------------------->
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
                <img class="w-full h-full border-blue-700 border-4" :src="bordure" alt="">
            </div>
            <div class="intro w-2/5 flex flex-col gap-10 items-start justify-center px-10">
                <h1 class="text-xl text-blue-700 font-bold">LA PRODUCTION DES TYPE DE BORDURE DES RUTES</h1>
                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">BORDURE T13 :</span>
                    <span>20 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">BORDURE T4 :</span>
                    <span>20 PALETTE PAR JOUR </span>
                </div>

                <div class="desgination flex gap-10 ">
                    <span class="text-blue-700 font-bold">BORDURE P1 :</span>
                    <span>20 PALETTE PAR JOUR </span>
                </div>


                <div class="description flex flex-col gap-4">
                    <h1 class="text-blue-700 font-bold">DESCRIPTION :</h1>
                    <p class=" max-w-xl">Precast concrete road edging designed to define and separate roads, sidewalks,
                        parking areas, and pedestrian zones. It provides a strong and durable boundary while helping
                        maintain the structure and stability of paved surfaces.</p>
                </div>
            </div>
        </section>

        <section class="table-values p-20">


            <table class="w-full border-collapse">
                <thead class="bg-blue-500 text-white ">
                    <tr>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Standard Use</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bordure T3</td>
                        <td>Road kerb</td>
                        <td>Roads, sidewalks & urban areas</td>
                        <td>Precast concrete road kerb designed to provide a strong and durable boundary between roads
                            and pedestrian areas.</td>
                    </tr>
                    <tr>
                        <td>Bordure T4</td>
                        <td>Road kerb</td>
                        <td>Roads, parking areas & urban infrastructure</td>
                        <td>Robust precast concrete kerb designed for road and urban construction, providing stability
                            and a clean separation between different surfaces.</td>
                    </tr>
                    <tr>
                        <td>Bordure P1</td>
                        <td>Concrete edging</td>
                        <td>Sidewalks, pedestrian areas & landscapin</td>
                        <td>Precast concrete edging designed to define and separate pedestrian areas, paved surfaces,
                            and landscaped spaces..</td>
                    </tr>
                </tbody>
            </table>



        </section>
    </section>
    <!--------------------------------------->
    <!-------------------------------------->
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
</style>