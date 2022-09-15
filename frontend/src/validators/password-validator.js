import { isNotEmpty } from "./generic-validator";

const isValidPassword = (value) => {
    // Can add more validate functions here in the future
    return isNotEmpty(value);
}

export default isValidPassword;