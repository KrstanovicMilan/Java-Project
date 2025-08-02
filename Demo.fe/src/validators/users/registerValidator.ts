import * as yup from "yup";

export const registerShema = yup.object().shape({
    firstName : yup.string().required().label("FirstName"),
    lastName : yup.string().required().label("LastName"),
    email : yup.string().email().required().label("Email"),
    password : yup.string().required().label("Password")

}).required();