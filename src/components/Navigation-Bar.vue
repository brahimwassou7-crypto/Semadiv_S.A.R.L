<!-----------  js --------------------->
<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


//-----------------  LANGUAGES CHANGE -------------------

const { locale } = useI18n()

const languages = (event) => {
    locale.value = event.target.value
    localStorage.setItem("lang", locale.value)
}
onMounted(() => {
    const savedLang = localStorage.getItem("lang")
    if (savedLang) {
        locale.value = savedLang
    } else {
        locale.value = "Fr"
    }
})

//------------- LIST BAR DEFAULT VALUE --------------------
const ListBar = ref(false)


//-------------------- GSAP ANIMATION -----------------------
onMounted(() => {
    gsap.fromTo(".blue-color, .gray-color", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1 })
    gsap.fromTo(".blue-and-gray-colors, .box2", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 2, delay: 1 })
    gsap.fromTo(".box1", { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 1, delay: 2 })
    gsap.fromTo(".box4", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 2 })
    gsap.fromTo(".links", { opacity: 0 }, { opacity: 1, duration: 1, delay: 2, stagger: 0.5 })
    gsap.fromTo(".languages, .list-bar-icon", { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 1, delay: 2 })
    gsap.fromTo(".input-search", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1, delay: 2 })

})

//----------------------- LINKS VALUES ---------------------------

const links = [
    { name: "nav.Accuiel", path: "/home" },
    { name: "nav.products", path: "/homeproductpage" },
    { name: "nav.Contact", path: "/Contact" }
]

</script>

<!----------- HTML--------------------->

<template>
    <!----------- NAVIGATION BAR--------------------->
    <!----------- ----------------------------------->
    <section class="navigation-bar-section flex w-full h-25 gap-2">
        <!----------- LEFT-SECTION--------------------->
        <!----------- ----------------------------------->
        <div class="left-section flex flex-col w-1/3">
            <div class="first-white-color bg-white w-full h-10 "></div>
            <!----------- ----------------------------------->
            <div class="blue-and-gray-colors flex w-full bg-gray-400">
                <div class="blue-color h-10 w-1/2 bg-blue-700"></div>
            </div>
            <!----------- ----------------------------------->
            <div class="second-white-color relative bg-white w-full h-5">


                <div v-if="user" class="accout-section absolute left-[10%] top-[99%]">
                    <img @click="showaccount" class=" rounded-full w-10 h-10 cursor-pointer border-4 border-blue-700"
                        :src="AccountImg" alt="">
                </div>

                <div v-if="ShowAccount && user"
                    class="showsaccount-section flex flex-col items-center justify-center gap-10 bg-white absolute top-[500%] p-10 ">


                    <img class="w-20 h-20 rounded-full border-4 border-blue-700" :src="AccountImg" alt="">
                    <div class="info flex items-center justify-center gap-3 ">
                        <div class="information flex flex-col gap-2 ">
                            <h1 class="text-blue-700 text-xl font-bold">Name : </h1>
                            <h2 class="text-blue-700 text-xl font-bold">Last Name :</h2>
                            <span class="text-blue-700 text-xl font-bold">Phone number :</span>
                            <span class="text-blue-700 text-xl font-bold">Email :</span>
                        </div>
                        <div class="information flex flex-col gap-2">
                            <h1>{{ user.name }}</h1>
                            <h2>{{ user.lastname }}</h2>
                            <span>{{ user.number }}</span>
                            <span>{{ user.email }}</span>
                        </div>
                    </div>

                    <button @click="logout"
                        class=" w-1/2 items-center justify-center bg-blue-700 p-2 text-white rounded-xl cursor-pointer">LOG
                        OUT</button>

                </div>


                <ul class="flex items-center justify-center gap-6 py-9 cursor-pointer">
                    <li class="links text-sm group hover:-translate-y-2 transition-all duration-150"
                        v-for="(link, index) in links" :key="index"> <router-link :to="link.path">{{ $t(link.name)
                            }}
                            <div
                                class=" h-1 scale-x-0 group-hover:scale-x-100 group-hover:bg-blue-500 transition-all duration-150 skew-x-[-40deg] ">
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!----------- RIGHT-SECTION--------------------->
        <!----------- ----------------------------------->
        <div class="right-section flex flex-col w-2/3">
            <!--------- FIRST RIGHT SETION ----------->
            <div class="first-right-part">
                <div class="box1 bg-black h-20  "></div>
                <div class="box2 bg-black h-10 "></div>
            </div>
            <!--------- SECOND RIGHT SETION --------->
            <div class="second-right-part w-full flex items-center justify-evenly ">
                <div class="box3 flex py-9 items-center justify-center gap-3 ">

                    <form @submit.prevent="searchProduct">

                        <input v-model="search"
                            class="input-search bg-gray-300 outline-0 text-black p-2 skew-x-[-20deg] " type="text"
                            :placeholder="$t('nav.Recherche')">
                    </form>

                    <i @click="ListBar = true"
                        class="list-bar-icon bi bi-list-task text-3xl absolute right-[-20%] top-[38%] cursor-pointer "></i>

                    <!---------LANGUAGES SELECT--------------->

                    <div class="languages">
                        <select @change="languages" class="bg-gray-300 p-2 skew-x-[-20deg] outline-0" name="" id="">
                            <option value="" disabled selected>Language</option>
                            <option value="Fr">Francais</option>
                            <option value="En">Englais</option>
                            <option value="Ar">Arabic</option>
                        </select>

                    </div>
                </div>

                <!--------- COMPAGNE INTRO --------->

                <div class="box4  h-5 text-center max-w-3xl gap-3 -mt-22.5">
                    <h1 class="text-2xl font-bold">STE SEMADIV S.A.R.L</h1>
                    <div class="h-1 w-full mt-2  bg-blue-500 "></div>
                    <p class="text-sm mt-2">{{ $t("nav.Description") }}</p>
                </div>
            </div>
        </div>
    </section>

    <!---------- LIST BAR ------------->

    <section v-show="ListBar" class="list-bar h-screen w-full fixed bg-blue-700 top-0 z-10 flex   ">
        <ul class="flex flex-col gap-10 text-xl items-center justify-center ">
            <li @click="ListBar = false"
                class="p-5 border-l-6 w-full ml-3 border-blue-900 group text-white cursor-pointer"
                v-for="(link, index) in links" :key="index">
                <router-link :to="link.path">{{
                    $t(link.name)

                }}</router-link>
            </li>

        </ul>

        <i @click="ListBar = false" class="bi bi-x-lg cursor-pointer text-3xl text-white absolute top-2 right-2"></i>

    </section>
</template>

<!----------- STYLE CSS --------------------->

<style>
.list-bar {
    transition: all ease-in-out 1s;
    animation: shows 0.3s ease-in-out;
    padding-bottom: 95%;

}

@keyframes shows {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }

}

.first-right-part {
    display: grid;
    grid-template-columns: 300px 1fr;
}


.blue-and-gray-colors {
    transform: skewX(-40deg);
    transform-origin: top;
}

.blue-color {
    transform: skewX(-15deg);
    transform-origin: top;
}

.box1 {
    transform: skewX(-40deg);
    transform-origin: right;
}

.box2 {
    transform: skewX(-40deg);
    transform-origin: top;

}

.list-bar-icon {
    display: none;
}


/*-------------- MEDIA QUERIES ---------------------*/

@media (max-width: 1300px) {
    .box4 {
        display: none;
    }
}

@media (max-width:800px) {

    .links {
        display: none;
    }

    .second-white-color {
        display: none;
    }

    .box3 {
        width: 100%;
        display: flex;
        position: relative;
        left: -100px;
    }

    .input-search {
        width: 100%;
    }

    .list-bar-icon {
        display: block;
    }
}
</style>