import * as yup from "yup";

export const createUserShema = yup.object().shape({
    firstName : yup.string().required().label("first name"),
    lastName : yup.string().required().label("last name"),
    email : yup.string().email().required().label("email")
}).required();