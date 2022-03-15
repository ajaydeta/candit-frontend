import {createToast} from 'mosha-vue-toastify';

export default function useToast(content, type = "success") {
    createToast(content, {
        showCloseButton: false,
        hideProgressBar: true,
        showIcon: true,
        type: type,
    })
}