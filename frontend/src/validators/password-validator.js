import { isNotEmpty } from "./generic-validator";

const STRONG_PASSWORD_REGEX = "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$";

const isStrongPassword = (value) => STRONG_PASSWORD_REGEX.test(value);

const isValidPassword = (value) => {
    // Can add more validate functions here in the future
    return isNotEmpty(value) && isStrongPassword(value);
}

export default isValidPassword;