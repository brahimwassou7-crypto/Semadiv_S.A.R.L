<!-----------  js --------------------->
<script setup>
import img1 from '@/assets/img/project-1.jpg'
import img2 from '@/assets/img/project-2.jfif'
import img3 from '@/assets/img/project-3.jfif'


</script>
<!----------- HTML--------------------->
<template>

    <!------- SECTION TITLE ------->

    <section class="title-section w-full flex flex-col items-center justify-center text-center gap-3 p-5 mt-3">
        <h1 class="text-3xl font-bold text-blue-700">{{ $t("project.title") }}</h1>
        <p class="text-sm max-w-5xl">{{ $t("project.text") }}</p>
    </section>

    <!----------- ROJECTS SECTION -------------->
    <!------------------------------------------>

    <section class="projects-section flex flex-col items-center justify-center gap-10 mt-5 lg:p-10">

        <!------- FIRST PROJECTS --------->
        <div
            class="first-project-1 group flex items-center w-full justify-between b mt-5 backdrop-blur-3xl shadow-2xl  ">
            <!---- LEFT SECTION------>
            <div class="left-section flex items-center gap-7 flex-col w-1/2 max-w-3xl px-5">
                <h1 class="text-blue-700 text-3xl font-bold">{{ $t("project.one_title") }}</h1>
                <p class="text-black max-w-xl  ">{{ $t("project.one_text") }}</p>
                <router-link to="/contact">
                    <button class="text-black  cursor-pointer group">contact us <i
                            class="bi bi-arrow-right group-hover:ml-10 transition-all duration-150 ease-in-out"></i>
                        <div class="bg-black w-0 h-0.5 group-hover:w-20 "></div>
                    </button>

                </router-link>

            </div>
            <!---- RIGHT SECTION------>
            <div class="right-section w-1/2">

                <img class="h-100 w-full object-cover shadow-2xl rounded-2xl" :src="img1" alt="">

            </div>
        </div>
        <!------- SECOND PROJECTS --------->
        <div
            class="first-project group flex items-center justify-between mt-5 w-full rounded-2xl backdrop-blur-3xl shadow-2xl  ">
            <!---- RIGHT SECTION------>
            <div class="right-section w-1/2">

                <img class="h-100 w-full object-cover shadow-2xl rounded-2xl" :src="img2" alt="">

            </div>
            <!---- LEFT SECTION------>
            <div class="left-section flex items-center gap-7 flex-col w-1/2 max-w-3xl px-5">
                <h1 class="text-blue-700 text-3xl font-bold">{{ $t("project.two_title") }}</h1>
                <p class="text-black max-w-xl ">{{ $t("project.two_text") }}</p>
                <router-link to="/contact">
                    <button class="text-black  cursor-pointer group">contact us <i
                            class="bi bi-arrow-right group-hover:ml-10 transition-all duration-150 ease-in-out"></i>
                        <div class="bg-black w-0 h-0.5 group-hover:w-20 "></div>
                    </button>

                </router-link>

            </div>
        </div>

        <!------- THIRD PROJECTS --------->
        <div
            class="first-project-1 group flex items-center justify-between w-full  mt-5 backdrop-blur-3xl shadow-2xl  ">
            <!---- LEFT SECTION------>
            <div class="left-section flex items-center gap-7 flex-col w-1/2 max-w-3xl px-5">
                <h1 class="text-blue-700 text-3xl font-bold">{{ $t("project.three_title") }}</h1>
                <p class="text-black max-w-xl  ">{{ $t("project.three_text") }}</p>
                <router-link to="/contact">
                    <button class="text-black  cursor-pointer group">contact us <i
                            class="bi bi-arrow-right group-hover:ml-10 transition-all duration-150 ease-in-out"></i>
                        <div class="bg-black w-0 h-0.5 group-hover:w-20 "></div>
                    </button>
                </router-link>
            </div>
            <!---- RIGHT SECTION------>
            <div class="right-section w-1/2">

                <img class="h-100 rounded-2xl object-cover shadow-2xl w-full" :src="img3" alt="">

            </div>
        </div>
    </section>
</template>
<!----------- STYLE CSS --------------------->
<style scoped>
.projects-section {
    background: url(../../assets/img/project-bg-img.PNG);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    background-position: center;
}


/*---------- MEDIA QUERY -----------*/

@media (max-width: 1060px) {
    .projects-section {
        width: 100%;
        gap: 100px;
        margin-bottom: 100px;
    }

    .first-project {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .first-project-1 {
        display: flex;
        flex-direction: column-reverse;
        gap: 50px;
    }

    .left-section,
    .right-section {
        width: 100%;
        padding: 0 0 10px 10px;
    }
}
</style>