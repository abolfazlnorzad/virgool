import { ref } from "@vue/composition-api";
import router from "@/router/router";
import store from '@/store';

export function registerModule() {
    /** state */
    const registerForm = ref(null);
    const form = ref({
        email: null,
        password: null,
    });
    const errors = ref({
        email: null,
        password: null,
    });
    const loading = ref(false);


    /** methods **/
    function register() {
        if(registerForm.value.validate()) {
            loading.value = true;
            store.dispatch('register', form.value)
                .then(() => {
                    router.push('/')
                })
                .catch((error) => {
                    errors.value.email = error.response.data.errors.email[0];
                    errors.value.password = error.response.data.errors.password[0];
                })
                .finally(() => loading.value = false)
        }
    };

    return {
        form,
        errors,
        loading,
        registerForm,
        register,
    }
}
