import {ref} from '@vue/composition-api';
import {moreThan, required, validEmail} from "@/rules";
import router from "../router/router";

export  function RegisterModule(){
    const registerForm = ref(null);
    const loading = ref(false);
    const errors = ref({
        email: null,
        password: null,
    });
    const form = ref({
        email: null,
        password: null,
    });
    const emailRules = ref([
        required('ایمیل'),
        validEmail()
    ]);
    const passwordRules = ref([
        required('رمز عبور'),
        moreThan(8,'رمزعبور')
    ]);

    function register() {
        if (registerForm.value.validate()) {
            loading.value = true;
            axios.post('/register', this.form)
                .then(()=>{
                    router.push('/');
                })
                .catch((error) => {
                    errors.value.email = error.response.data.errors.email[0]

                })
                .finally(() => {
                    loading.value = false;
                })
        }
    }

    return{
        loading,
        errors,
        form,
        emailRules,
        passwordRules,
        register,
        registerForm,
    }

}
