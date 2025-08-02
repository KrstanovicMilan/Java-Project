import * as yup from "yup";

export const updateUserShema = yup.object().shape({
    firstName : yup.string().optional().label("first name"),
    lastName : yup.string().optional().label("last name"),
    email : yup.string().email().required().label("email")
}).required();