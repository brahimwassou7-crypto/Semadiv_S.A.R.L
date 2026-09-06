<!-----------  js --------------------->
<script setup>
import { ref } from 'vue';

const messagesent = ref("")

const name = ref("")
const lastName = ref("")
const number = ref("")
const type = ref("")
const message = ref("")
const email = ref("")


const nameError = ref("")
const lastNameError = ref("")
const numberError = ref("")
const emailError = ref("")
const messageError = ref("")

async function SendEmail() {


    if (!name.value || !lastName.value || !number.value || !email.value || !message.value) {

        if (name.value === "") {
            nameError.value = "name required"
        }
        if (lastName.value === "") {
            lastNameError.value = "last name required"
        }
        if (number.value === "") {
            numberError.value = "number required"
        }
        if (email.value === "") {
            emailError.value = "email required"
        }
        if (message.value === "") {
            messageError.value = "message required"
        }
        return

    }

    const EmailFome = {
        name: name.value,
        lastName: lastName.value,
        number: number.value,
        email: email.value,
        type: type.value,
        message: message.value
    }

    try {

        const response = await fetch("http://Localhost:3001/Contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(EmailFome)
        })
        const data = await response.json()
        console.log(data)

        name.value = ""
        lastName.value = ""
        number.value = ""
        type.value = ""
        message.value = ""
        email.value = ""
        nameError.value = ""
        lastNameError.value = ""
        numberError.value = ""
        emailError.value = ""
        messageError.value = ""

        messagesent.value = "Message sent seccusfully "
        setTimeout(() => {
            messagesent.value = ""
        }, 3000)

    } catch (error) {
        console.log(error)

    }
}

</script>

<!----------- HTML--------------------->
<template>
    <!----------------- CONTACT SECTION TITLE  ------------------->
    <!------------------------------------------------------>
    <section
        class="intro-contact-section px-10 bg-linear-to-r mt-30 from-blue-500 to-blue-900 h-[40vh]  flex flex-col  justify-center w-full gap-10 ">

        <h1 class="text-5xl font-bold">{{ $t("contact.title") }}</h1>
        <p class="text-xl text-white max-w-3xl"> {{ $t("contact.text") }} </p>
    </section>

    <!----------------- CONTACT SECTION ------------------->
    <!------------------------------------------------------>
    <section class="contact-section flex gap-20 w-full lg:h-screen lg:px-10 lg:py-10 px-2 py-2">
        <form @submit.prevent="SendEmail"
            class="form-section flex-col bg-gray-100 lg:px-10 lg:py-10 px-2 py-2 flex h-full w-1/2 items-center justify-center ">
            <label class="w-full pl-3 pt-2 mb-5" for="">name : </label>
            <input v-model="name" class="px-2 w-full py-3 bg-gray-200" type="text" name="" placeholder="name" id="">
            <span class=" text-red-600 w-full" v-if="nameError">{{ nameError }}</span>

            <label class="w-full pl-3 pt-2 mb-5" for="">last-name : </label>
            <input v-model="lastName" class="px-2 w-full py-3 bg-gray-200" type="text" name="" placeholder="last-name"
                id="">
            <span class=" text-red-600 w-full " v-if="lastNameError">{{ lastNameError }}</span>


            <label class="w-full pl-3 pt-2 mb-5" for="">Phone Number : </label>
            <input v-model="number" class="px-2 w-full py-3 bg-gray-200" type="text" name=""
                placeholder="+000 00 00 00 00 00" id="">
            <span class=" text-red-600 w-full" v-if="numberError">{{ numberError }}</span>


            <label class="w-full pl-3 pt-2 mb-5" for="">email : </label>
            <input v-model="email" class="px-2 w-full py-3 bg-gray-200" type="email" name="" placeholder="email" id="">
            <span class=" text-red-600 w-full" v-if="emailError">{{ emailError }}</span>

            <select v-model="type" class="w-full py-3 bg-gray-200 mt-10">
                <option value="" disabled selected>
                    Select your project type:
                </option>
                <option value="Residential Building"> Residential Building</option>
                <option value="Commercial Building"> Commercial Building</option>
                <option value="Industrial Project"> Industrial Project</option>
                <option value="Roads & Infrastructure"> Roads & Infrastructure</option>
                <option value="Public / Administrative Project"> Public / Administrative Project</option>
                <option value="other">other</option>
            </select>


            <label class="w-full pl-3 pt-2 mb-5" for="">message : </label>
            <span class=" text-red-600 w-full " v-if="messageError">{{ messageError }}</span>
            <textarea v-model="message" class="px-2 w-full h-100 bg-gray-200" name="" placeholder="message"
                id=""></textarea>

            <p class="w-full bg-green-400 border-green-700 border-2 text-white p-4 mt-5" v-if="messagesent">{{
                messagesent }} <i class="bi bi-send-fill"></i></p>


            <button type="submit" class="w-full py-3 bg-blue-700 mt-10 text-xl text-white cursor-pointer">{{
                $t("contact.send") }}</button>


        </form>

        <div class="right-section-email-intro flex flex-col gap-20 w-1/2">
            <h1 class="text-9xl font-bold">SEMADIV S.A.R.L</h1>
            <p class="text-xl text-black max-w-3xl">{{ $t("contact.intro_title") }} </p>
            <span> {{ $t("contact.intro_text") }} </span>
            <div class="sign-btns flex flex-col gap-2 ">
            

            </div>
        </div>
    </section>


    <!------------ SECOND CONTACT SECTION ------------------>
    <!-------------------------------------------------------->
    <section class="info-section w-full  flex gap-10 lg:mt-10 ">
        <div class="left-section w-1/2">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4200.815664161222!2d-15.995055641004786!3d23.658376959204382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc2239b86d4b32d5%3A0x6d8bf10b5ce9f18!2sSTEP%20DAKHLA!5e1!3m2!1sen!2sma!4v1786807331220!5m2!1sen!2sma"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"></iframe>

        </div>

        <div class="right-section w-1/2">

            <label class="text-blue-700 font-bold" for="">Siège Social :</label>
            <p>Bd Mohamed Fadel Semlali Lotissement Madinat A1 Wahda lot NO 625 Dakhla - Maroc</p>


            <label class="text-blue-700 font-bold" for="">Tél / Fax :</label>
            <p>05 28 89 56 53 / 06 73 83 63 73</p>


            <label class="text-blue-700 font-bold" for="">RC :</label>
            <p>4256</p>


            <label class="text-blue-700 font-bold" for="">CNSS :</label>
            <p>0753086</p>


            <label class="text-blue-700 font-bold" for="">IF :</label>
            <p>12345678901234</p>


            <label class="text-blue-700 font-bold" for="">ICE :</label>
            <p>044554325111</p>


            <label class="text-blue-700 font-bold" for="">TP :</label>
            <p>099928882</p>


            <label class="text-blue-700 font-bold" for="">GMAIL :</label>
            <p>semadivsarl8787@gmail.com</p>

        </div>

    </section>
</template>




<!----------- STYLE CSS --------------------->

<style scoped>
.intro-contact-section h1 {
    -webkit-text-stroke: 1px white;
    color: transparent;
}

.right-section-email-intro h1 {
    -webkit-text-stroke: 2px blue;
    color: transparent;
}

/*-----------MEDIA QUERY ----------------*/

@media (max-width: 1016px) {
    .contact-section {
        flex-direction: column;
        flex-direction: column-reverse;
        width: 100%;
        padding: 10px;
    }

    .form-section {
        width: 100%;
    }

    .right-section-email-intro {
        width: 100%;
    }

    .info-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }

    .left-section {
        width: 100%;
    }

    .right-section {
        width: 100%;
    }


}
</style>