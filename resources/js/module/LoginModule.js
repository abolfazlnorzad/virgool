import {ref} from '@vue/composition-api';
import {moreThan, required} from "@/rules";
import router from "../router/router";


export function LoginModule() {
    const loading = ref(false);
    const LoginForm = ref(null);
    const form = ({
        email: null,
        password: null,
    });
    const errors = ({
        email: null,
        password: null,
    });

    const passwordRules = ref([
        required('رمز عبور'),
        moreThan(8, 'رمز عبور')
    ]);

    function login() {
       if(LoginForm.value.validate()){
           this.loading = true;
           axios.post('/login', this.form)
               .then(() => {
                   router.push('/');
               })
               .catch((error) => {
                   errors.value.email = error.response.data.errors.email[0]
               })
               .finally(() => {
                   this.loading = false;
               })
       }

    }

    return {
        loading,
        form,
        errors,
        login,
        passwordRules,
        required,
        moreThan,
        LoginForm
    }

}
