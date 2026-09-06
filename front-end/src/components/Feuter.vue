<!-----------  js --------------------->
<script setup>



</script>


<!----------- HTML--------------------->
<template>

    <!--------- FEATURE SECTION ------------->
    <!--------- -------------- ------------->
    <section class="futer-section w-full flex flex-col gap-3 mt-50">

        <!-------- FIRST PART --------------->
        <!----------------------------------->
        <div class="second-part flex-col w-full">

            <div class="first-section w-full flex items-center justify-center gap-5 ">
                <div class="black-box relative w-1/3 bg-black h-10 "></div>
                <div class="flex w-1/3">
                    <div class="blue-box w-2/3 bg-blue-700 h-7"></div>
                    <div class="gray-box w-1/3 bg-gray-300 h-7"></div>
                </div>
                <div class="w-1/3 bg-blue-700  h-3 "></div>
            </div>

            <div class="second-section w-full">
                <div class="w-full h-10 bg-black"></div>
            </div>

        </div>

    </section>
</template>


<!----------- STYLE CSS --------------------->

<style scoped>
.first-section .black-box {
    transform: skewx(20deg);
}

.black-box::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    height: 100%;
    transform: skewx(-20deg);
    background-color: black;
}

.blue-box,
.gray-box {
    transform: skewx(20deg);
}
</style>