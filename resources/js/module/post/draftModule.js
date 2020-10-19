import {computed, reactive, toRefs} from "@vue/composition-api";
import store from "@/store";


export default function dratModule() {
    const data = reactive({

        dialogDeleteDraft: false,
        deleteableDraft: {},

        drafts: computed(() => {
            return store.state.draft.drafts
        }),
        drafts_count: computed(() => {
            return store.state.draft.drafts_count
        }),

    });

    const openDialogDraft = (index, link) => {
        data.dialogDeleteDraft = true;
        data.deleteableDraft = {index, link};
    };
    const deleteDraft = () => {
        data.dialogDeleteDraft = false;
        store.dispatch('draft/deleteDraft', data.deleteableDraft);
        data.deleteableDraft = {};
    };
    const cancelDeleteDraft = () => {
        data.dialogDeleteDraft = false;
        data.deleteableDraft = {};
    };


    const fetchAllDrafts = () => store.dispatch('draft/fetchAllDrafts');

    return {
        ...toRefs(data),
        cancelDeleteDraft,
        fetchAllDrafts,
        deleteDraft,
        openDialogDraft,

    }



}
