export const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);

}

export const isValidPassword = (password) => {
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return mediumRegex.test(password);

}
export const isValidTel = (tel) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(tel);

}


const validator = Object.freeze({
    isValidEmail,
    isValidPassword,
    isValidTel
})

export default validator;