import {ref, computed} from '@vue/composition-api';
import Upload64 from "../../module/file/Upload64";
import store from "@/store";

export function profileModule() {
    const user = ref(null);
    const form = ref(null);
    const editStatus = ref({
        username: false,
        email: false,
    });
    const old = ref({
        username: null,
        email: null,
    });

    const errors = ref({
        username: null,
        email: null,
    });

    function changeEdit(data) {
        editStatus.value[data] = !editStatus.value[data];
        old.value[data] = user.value[data];
    }

    function cancel(data) {
        editStatus.value[data] = false;
        user.value[data] = old.value[data];
    }

    function uploadProfile(event) {
        user.value.profile_name = event.target.files[0].name;
        user.value.profile_src = user.value.profile = Upload64(event)
    }

    const url = computed(() => {
        return process.env.MIX_APP_URL + '/';
    });

    const fullusername = computed(() => {
        return url.value + user.value.username;

    });

    const getUser = () => {

        axios.get('/api/me')
            .then(({data}) => {
                user.value = data;
                old.value.email = data.email;
                old.value.username = data.username;
            })
    }


    const update = () => {
        if (form.value.validate()) {
            axios.patch('/api/profile', user.value)
                .then(({data}) => {
                    store.dispatch('user/changeName', data.name);
                    errors.value = {
                        email:null,
                        username:null
                    };
                    editStatus.value={
                        email:false,
                        username:false
                    }

                })
                .catch(({response}) => {
                    for (let index in response.data.errors) {
                        console.log(index);
                        errors.value[index] = response.data.errors[index][0];
                        editStatus.value[index] = true;
                    }
                })
        }
    }

    getUser();
    return {
        user,
        old,
        editStatus,
        changeEdit,
        cancel,
        uploadProfile,
        url,
        fullusername,
        getUser,
        form,
        update,
        errors

    }
}
