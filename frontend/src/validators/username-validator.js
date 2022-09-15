import { isNotEmpty } from "./generic-validator";

const isValidUsername = (value) => {
    // Can add more validate functions here in the future
    return isNotEmpty(value);
}

export default isValidUsername;