<template>
    <v-system-bar
        height="50px"
        class="d-flex justify-center"
    >
        برای فعال سازی حساب کاربری خود،ایمل خود را تایید کنید
        <template v-if="send"

        >
            <h4 class="success--text font-wieght-bold mx-3">ایمیل ارسال شد</h4>
        </template>
        <template v-else>
            <v-btn
                class="mx-3"
                rounded
                text
                small
                outlined
                @click="sendEmail"
            >
                ارسال ایمیل
            </v-btn>
        </template>
    </v-system-bar>
</template>

<script>
    import {ref} from '@vue/composition-api';
    export default {
        name: "VerifyBanner",
        setup() {
            const send = ref(false);

            function sendEmail() {
                axios.post('/email/resend')
                    .then(() => {
                        send.value = true;
                    })
            }

            return {
                send,
                sendEmail
            }
        }
    }
</script>

<style scoped>

</style>
