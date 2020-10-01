export function required(field) {
    return value => !!value || field + ' الزامی است';
}

export function validEmail() {
    return value => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'یک ایمیل معتبر وارد کنید'
}
export function moreThan(len,field){
    return value => (value ? value.length >= 8 : false) || `طول ${field} باید بیشتر از ${len} کاراکتر باشد`
}
